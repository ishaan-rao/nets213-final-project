import React, { memo, useState, useEffect} from "react";
import { geoCentroid } from "d3-geo";
import { scaleQuantize } from "d3-scale"
import {csv} from "d3-fetch"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "./data/states.json";
import stateData from "./data/sample_state_output.json"

import gradient from "./data/gradient.json"
import ReactTooltip from "react-tooltip";
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


//Maybe should change the domain / gradient so there are more colors for the inner ranges and not as many for the outer ranges
const colorScale = scaleQuantize()
  .domain([0, 9000])
  .range(gradient);


/*
 TODOs: 
    - Chloropleth map
    - Include number of yes/no tweets in tooltip
        * Maybe include like top 5 counties in terms of yes tweets or something?
*/
const StateMapChart = ({ setTooltipContent }) => {

    return (
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
                        setTooltipContent(`${name} \n Yes - ${stateData[name]["yes_count"]} \n No - ${stateData[name]["no_count"]}`);
                    }}
                    onMouseLeave={() => {
                        setTooltipContent("");
                    }}
                    stroke="#FFF"
                    style={{
                        default: {
                        fill: colorScale(stateData[geo.properties.name] ? (stateData[geo.properties.name]["yes_count"]) : "#EEE"),
                        outline: "#000000"
                        },
                        hover: {
                        fill: "#00c202",
                        outline: "#000000"
                        },
                        pressed: {
                        fill: "#E42",
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
    );
};
export default memo(StateMapChart);