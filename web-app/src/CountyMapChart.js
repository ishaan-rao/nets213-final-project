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
const stateUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";



/*
 TODOs: 
    - Chloropleth map
*/
const CountyMapChart = ({ setTooltipContent }) => {
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
                </>
                )}
            </Geographies>
            </ComposableMap>
    );
};
export default memo(CountyMapChart);