import React, { memo } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "./data/states.json";

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

/*
 TODOs: 
    - Chloropleth map
    - Include number of yes/no tweets in tooltip
        * Maybe include like top 5 counties in terms of yes tweets or something?
*/
const MapChart = ({ setTooltipContent }) => {
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
                            setTooltipContent(`${name}`);
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                        stroke="#FFF"
                        style={{
                            default: {
                            fill: "#D6D6DA",
                            outline: "#000000"
                            },
                            hover: {
                            fill: "#F53",
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
                                <text y="2" fontSize={14} textAnchor="middle">
                                {cur.id}
                                </text>
                            </Marker>
                            ) : (
                            <Annotation
                                subject={centroid}
                                dx={offsets[cur.id][0]}
                                dy={offsets[cur.id][1]}
                            >
                                <text x={4} fontSize={14} alignmentBaseline="middle">
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
export default memo(MapChart);