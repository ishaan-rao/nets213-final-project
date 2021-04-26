import logo from '../logo.svg';
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
    - Maybe include county map?
    - Include picture of cdc map? Maybe can link directly
    - Actually hook up data
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
            <ReactTooltip>{stateContent}</ReactTooltip>


            <div> 
                <h1> Vaccination Tweets at the County Level</h1>
            </div>
            <CountyMapChart setTooltipContent={setCountyContent} />
            <ReactTooltip>{countyContent}</ReactTooltip>
        </div>
    )
}


export default Home;