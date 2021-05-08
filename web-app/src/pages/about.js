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
            <h1>About this project</h1>
            <p>This project was done by David Li, Ishaan Rao, Michael Song, and Eric Zhang as a final project for Nets213 at UPenn.</p>
            <br/>
            <p>The majority of this project (i.e. data collection, cleaning, and aggregation) was done in Python (with a little bit of Excel and Tableau), and the website was built using JavaScript and React</p>
        </div>
    )
}



export default About;