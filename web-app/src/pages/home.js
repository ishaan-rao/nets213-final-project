import '../App.css';
import React, { useState } from "react";
import StateMapChart from "../StateMapChart";
import CountyMapChart from "../CountyMapChart";
// import {Nav, Navbar} from 'react-bootstrap';
import NavigationPanel from '../components/NavigationPanel';
import ReactTooltip from "react-tooltip";

import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

/* 
TODO: 
    - Include picture of cdc map? Maybe can link directly
    - Actually hook up data. Right now its using the same fake data for both the state and county maps
*/
const Home = () => {
    const [stateContent, setStateContent] = useState("");
    const [countyContent, setCountyContent] = useState("");
    return (
        <div>
            <NavigationPanel/>
            <br/>
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
    )
}


export default Home;