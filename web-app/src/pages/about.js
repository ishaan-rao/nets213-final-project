import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import NavigationPanel from '../components/NavigationPanel';


/*
TODO: fill this out more
*/
const About = () => {
    return (
        <div>
            <NavigationPanel/>
            <br/>
            <div class="cont">
                <h1>About VacciNation</h1>
                <p>This project was done by David Li, Ishaan Rao, Michael Song, and Eric Zhang as a final project for NETS 213: Crowdsourcing and Human Computation.</p>
                <br/>
                <p>The majority of this project (i.e. data collection, cleaning, and aggregation) was done in Python, and the website was built using JavaScript and React.</p>
            </div>
        </div>
    )
}



export default About;