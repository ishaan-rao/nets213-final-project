import '../App.css';
import React, { useState } from "react";
import StateMapChart from "../StateMapChart";
import CountyMapChart from "../CountyMapChart";
// import {Nav, Navbar} from 'react-bootstrap';
import NavigationPanel from '../components/NavigationPanel';
import ReactTooltip from "react-tooltip";

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';
import 'leaflet/dist/leaflet.css';

/* 
TODO: 
    - Include picture of cdc map? Maybe can link directly
    - Actually hook up data for county map
*/
const Home = () => {
    const [stateContent, setStateContent] = useState("");
    const [countyContent, setCountyContent] = useState("");
    return (
        <div>
            <NavigationPanel/>
            <br/>
            <div className="cont">
                <div>
                    <h1>Vaccination Tweets at the State Level</h1>
                </div>
                <StateMapChart setTooltipContent={setStateContent} />
                <ReactTooltip html={true}>{stateContent}</ReactTooltip>


                <div> 
                    <h1> Vaccination Tweets at the County Level</h1>
                </div>
                <CountyMapChart setTooltipContent={setCountyContent} />
                <ReactTooltip html={true}>{countyContent}</ReactTooltip>
            </div>
        </div>
    )
}


export default Home;