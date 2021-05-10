
import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import NavigationPanel from '../components/NavigationPanel';

/*
TODO: fill this out with a part explaining our workflow
*/

const Data = () => {
    return (
        <div>
            <NavigationPanel/>
            <br/>
            <h1>Data and Methodology</h1>
            <h2>Data collection</h2>
                <p>The data for this project was collected from twitter using the Tweepy API. The tweets were then tagged with a location using 
                    the Carmen API. Tweets either without location data or from a different country from the US were dropped.
                </p>
                <br/>
                <p>
                    We queried several different hashtags such as "#CovidVaccine", "#Vaxxed", "#Pfizer", "#Moderna", "#vaccine", to get tweets and ended with 
                    around ten thousand tweets after this intial collection phase. 
                </p>
            <h2>Amazon Mechanical Turk</h2>
                <p>
                    In order to actually ensure that the tweets we were counting would be about getting the covid vaccine we used 
                    Amazon Mechanical Turk, an online crowdsourcing platform, to classify the tweets. To ensure quality answers, we included 
                    gold standard questions (i.e. tweets which we knew were or were not about getting the Covid vaccine) to filter out workers
                    who were just randomly clicking or did not understand the goal of the task we were assigning. Additionally, each tweet was 
                    reviewed three times and the majority label was taken. 
                </p>
            <h2>Data Aggregation</h2>
                <p>
                    After filtering out those who failed the gold standard questions, we had roughly five thousand tweets. We aggregated these tweets 
                    by state and county and displayed it on this website using react.
                </p>
        </div>
    )
}


export default Data;