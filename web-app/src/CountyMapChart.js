import React, { memo, useState} from "react";
import { scaleQuantize } from "d3-scale"
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import countyData from "./data/county_data.json"
import greenGradient from "./gradients/green_gradient.json"
import redGradient from "./gradients/red_gradient.json"
import redToGreenGradient from "./gradients/red_to_green_gradient.json"

import "./styles/main.css";

//Code adapted from the react-simple-maps tutorial
const countiesUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";


//const countiesUrl = "https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_050_00_500k.json"

//Function to write the tooltip
const generateTooltipContent = (name, state, yes_count, no_count) => {
    switch (state) {
        case "yes":
            return `${name} <br/> Yes: ${yes_count} <br/> No: ${no_count}`
        case "no":
            return `${name} <br/> Yes: ${yes_count} <br/> No: ${no_count}`
        case "diff":
            return `${name} <br/> Difference: ${yes_count - no_count}`
        case "percent":
            return `${name} <br/> Percentage of yes tweets: ${Number.parseFloat(100 * yes_count / (yes_count + no_count)).toPrecision(3)}%`
        default: 
            return "error"
    }
}

//Function to determine the color for this state
const generateScaleValue = (name, state, yes_count, no_count) => {
    switch (state) {
        case "yes":
            return yes_count
        case "no":
            return no_count 
        case "diff":
            return yes_count - no_count 
        case "percent":
            return yes_count / (yes_count + no_count)
        default: 
            return 0 //this should never happen
    }
}

//Maybe should change the domain / gradient so there are more colors for the inner ranges and not as many for the outer ranges
const generateColorScale = (state) => {
    switch (state) {
        case "yes":
            return scaleQuantize().domain([0, 10]).range(greenGradient);
        case "no":
            return scaleQuantize().domain([0, 10]).range(redGradient);
        case "diff": 
            return scaleQuantize().domain([-10, 10]).range(redToGreenGradient);
        case "percent":
            return scaleQuantize().domain([0, 1]).range(redToGreenGradient);
    }
}


const CountyMapChart = ({ setTooltipContent }) => {

    const [mapType, setMapType] = useState("yes")

    const [title, setTitle] = useState("Number of Yes Tweets")

    return (
        <div>
            <div className="title" id="t">
                <h4>{title}</h4>
            </div>

            <div className="title">
                <DropdownButton as={ButtonGroup} title="State Map Type" id="bg-vertical-dropdown-1">
                    <Dropdown.Item onClick={() => {setMapType("yes"); setTitle("Number of Yes Tweets")}} eventKey="1">Number of Yes Tweets</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setMapType("no"); setTitle("Number of No Tweets")}} eventKey="2">Number of No Tweets</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setMapType("diff"); setTitle("Difference of Yes and No Tweets")}} eventKey="3">Difference of Yes and No Tweets</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setMapType("percent"); setTitle("Percentage of Yes Tweets to Total Tweets")}} eventKey="4">Percentage of Yes Tweets to Total Tweets</Dropdown.Item>
                </DropdownButton>
            </div>
            
            <ComposableMap data-tip="" projection="geoAlbersUsa">
            <Geographies geography={countiesUrl}>
                {({ geographies }) => (
                <>
                    {geographies.map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                            const fips = "" + parseInt(geo.id, 10);
                            const obj = countyData[fips]
                            setTooltipContent(countyData[fips] ? generateTooltipContent(obj["county"], mapType, obj["yes_count"], obj["no_count"]) : `No data found`);
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                        stroke="#FFF"
                        style={{
                            default: {
                            fill: countyData["" + parseInt(geo.id, 10)] ? generateColorScale(mapType)(generateScaleValue(countyData["" + parseInt(geo.id, 10)]["county"], mapType, countyData["" + parseInt(geo.id, 10)]["yes_count"], countyData["" + parseInt(geo.id, 10)]["no_count"])) : "#EEE",
                            outline: "#000000"
                            },
                            hover: {
                            fill: "#f5f5f5",
                            outline: "#000000"
                            },
                            pressed: {
                            fill: "#565656",
                            outline: "#000000"
                            }
                        }}

                    />
                    ))}
                </>
                )}
            </Geographies>
            </ComposableMap>
        </div>
    );
    
};
export default memo(CountyMapChart);