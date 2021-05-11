
import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';

import NavigationPanel from '../components/NavigationPanel';

/*
TODO: fill this out with a part explaining our workflow
*/

const Data = () => {
    return (
        <div>
            <NavigationPanel/>
            <br/>
            <div className="cont">
                <h1>Data and Methodology</h1>
                <h4>Data Collection</h4>
                <p>All of the data for this project was scraped from Twitter using the Tweepy API in Python. We queried several different hashtags such as "#CovidVaccine", 
                    "#Vaxxed", "#Pfizer", "#Moderna", "#vaccine" to get tweets, and ended with around 10,000 tweets after this collection phase. The tweets were then 
                    tagged with a location (county and state) using the Carmen API. Tweets without location data or tweets from outside the United States were disregarded.
                </p>
                <img src="tweepy.jpeg"></img>
                <h4>Data Classification</h4>
                <p>
                    In order to actually ensure that the tweets we were counting would be about getting the COVID-19 vaccine we used 
                    Amazon Mechanical Turk, an online crowdsourcing platform, to classify the tweets. Workers on MTurk were presented with 12
                    tweets from our scraped data and were asked to select which tweets actually indicated that a user received a vaccine. One example of 
                    a HIT on Mechanical Turk is found below.
                </p>
                <img width="700" src="mturk.png"></img>
                <h4>Quality Control</h4>
                <p>
                    To ensure quality answers, we included positive and negativegold standard questions (i.e. tweets which we already knew were or were not about 
                    getting the vaccine). This was included to filter out workers who were just randomly clicking or did not understand the goal of the task 
                    we were assigning, ensuring that the data we collected was of the highest quality. We ignored all responses from workers who did not correctly identify 
                    the gold standard questions.
                </p>
                <h4>Data Aggregation</h4>
                <p>
                    Lastly, we had each tweet reviewed by three MTurk workers, and we used a simple vote majority vote to determine the final classification. After filtering out those who failed the gold standard questions, we had roughly 5,000 tweets left as data points. 
                    Using the Carmen API, we were able to identify the state and county of these tweets. We then conducted an analysis that compared our findings to the actual vaccination progress in the United States (according to the official CDC data). Our results can be
                    found on the home page, and our analysis can be found on the analysis page. We utilized React to create this application and allow users to interactively view our findings.
                </p>
                <img width="700" src="cdc.jpeg"></img>
            </div>
        </div>
    )
}


export default Data;