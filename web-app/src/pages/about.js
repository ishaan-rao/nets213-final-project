import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';

import NavigationPanel from '../components/NavigationPanel';


/*
TODO: fill this out more
*/
const About = () => {
    return (
        <div>
            <NavigationPanel/>
            <br/>
            <div className="cont">
                <h1>About VacciNation</h1>
                <img width="300" src="nets213_logo.png"></img>
                <p>This project was conducted by David Li, Ishaan Rao, Michael Song, and Eric Zhang as a final project for Nets213 at UPenn.</p>
                <p>The goal of the project was to test if aggregating the location of tweets that are about users getting a COVID vaccine would be an accurate proxy of 
                COVID vaccination rates across the country. Using Twitter and Amazon Mechanical Turk, we want to see if we could use crowdsourcing to create a vaccination map 
                that would closely resemble that of the official maps created by reputable news sources (i.e. CDC, The New York Times). Given the nature of the data collected,
                we were able to plot maps on both a state level and a county level, though our county data was a little more limited. For each map, a few plotting options
                are provided for users to choose from. Further details about the process of our data collection can be seen on the <a href="/data">Data and Methodology</a> page.</p>
                <br/>
                <p>The majority of this project (i.e. data collection, cleaning, and aggregation) was done in Python (with a little bit of Excel and Tableau), and the website was built using JavaScript and React</p>
                <img height="300" src="py.png"></img>
                <img height="300" src="logo512.png"></img>
            </div>
            </div>
    )
}



export default About;