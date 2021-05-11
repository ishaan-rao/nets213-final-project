import React, { memo, useState} from "react";
import { geoCentroid } from "d3-geo";
import { scaleQuantize } from "d3-scale"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import allStates from "./data/states.json";
import stateData from "./data/state_output.json"
import greenGradient from "./gradients/green_gradient.json"
import redGradient from "./gradients/red_gradient.json"
import redToGreenGradient from "./gradients/red_to_green_gradient.json";

import "./styles/main.css";

//Code adapted from the react-simple-maps tutorial
const stateUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

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
            return 0
    }
}

//Maybe should change the domain / gradient so there are more colors for the inner ranges and not as many for the outer ranges
const generateColorScale = (state) => {
    switch (state) {
        case "yes":
            return scaleQuantize().domain([0, 100]).range(greenGradient);
        case "no":
            return scaleQuantize().domain([0, 100]).range(redGradient);
        case "diff": 
            return scaleQuantize().domain([-100, 100]).range(redToGreenGradient);
        case "percent":
            return scaleQuantize().domain([0, 1]).range(redToGreenGradient);
    }
}


/*
 TODOs: 
    - Hook up actual data
*/
const StateMapChart = ({ setTooltipContent }) => {

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
            <Geographies geography={stateUrl}>
                {({ geographies }) => (
                <>
                    {geographies.map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                            const name = geo.properties.name;
                            setTooltipContent(stateData[geo.properties.name] ? generateTooltipContent(name, mapType, stateData[name]["yes_count"], stateData[name]["no_count"]): `${name} <br/> No data found`);
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                        stroke="#FFF"
                        style={{
                            default: {
                            fill: stateData[geo.properties.name] ? generateColorScale(mapType)(generateScaleValue(geo.properties.name, mapType, stateData[geo.properties.name]["yes_count"], stateData[geo.properties.name]["no_count"])) : "#EEE",
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
                    {geographies.map(geo => {
                    const centroid = geoCentroid(geo);
                    const cur = allStates.find(s => s.val === geo.id);
                    return (
                        <g key={geo.rsmKey + "-name"}>
                        {cur &&
                            centroid[0] > -160 &&
                            centroid[0] < -67 &&
                            (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                            <Marker coordinates={centroid}>
                                <text y="2" fontSize={10} textAnchor="middle">
                                {cur.id}
                                </text>
                            </Marker>
                            ) : (
                            <Annotation
                                subject={centroid}
                                dx={offsets[cur.id][0]}
                                dy={offsets[cur.id][1]}
                            >
                                <text x={4} fontSize={10} alignmentBaseline="middle">
                                {cur.id}
                                </text>
                            </Annotation>
                            ))}
                        </g>
                    );
                    })}
                </>
                )}
            </Geographies>
            </ComposableMap>
        </div>
    );
    
};
export default memo(StateMapChart);