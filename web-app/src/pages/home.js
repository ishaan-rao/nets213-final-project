import '../App.css';
import React, { useState } from "react";
import StateMapChart from "../StateMapChart";
import CountyMapChart from "../CountyMapChart";
// import {Nav, Navbar} from 'react-bootstrap';
import NavigationPanel from '../components/NavigationPanel';
import ReactTooltip from "react-tooltip";

import { Bar } from 'react-chartjs-2';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';
import 'leaflet/dist/leaflet.css';

const data = {
    labels: ['California', 'New York', 'Texas', 'Florida', 'Ohio'],
    datasets: [
      {
        label: '# of Tweets',
        data: [372, 171, 121, 107, 82],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ['Los Angeles County, CA', 'Cook County, IL', 'San Diego County, CA', 'King County, WA', 'Clark County, CA'],
    datasets: [
      {
        label: '# of Tweets',
        data: [122, 44, 30, 30, 28],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

const Home = () => {
    const [stateContent, setStateContent] = useState("");
    const [countyContent, setCountyContent] = useState("");
    return (
        <div>
            <NavigationPanel/>
            <br/>
            <div className="cont">
                <h1>Results</h1>
                <p>
                    Below we display the results we found from our crowdsourcing experiment. We display both state level and county level data.
                    Each map has four main statistics that it displays: Number of Yes Tweets, Number of No Tweets, Difference of Yes and No Tweets, 
                    and Percentage of Yes Tweets to Total Tweets.  Number of Yes Tweets represents the number of tweets that were classifed to be indicative of 
                    a user receiving a vaccine. This is statistic should correlate to the actual vaccination data from the CDC. We will discuss on the analysis page
                    why this was not the case in our experiment. Number of No Tweets represents the number of tweets that were not classified to be indicative of 
                    a user receiving a vaccine. Difference of Yes and No Tweets is simply the absolute value of the difference between the two previous values. 
                    Lastly, Percentage of Yes Tweets to Total Tweets just represents the proportion of tweets from a state or county that were classified to be indicative of
                    a user getting a vaccine.
                </p>

                <hr></hr>

                <div>
                    <h2>Vaccination Tweets at the State Level</h2>
                </div>
                <StateMapChart setTooltipContent={setStateContent} />
                <ReactTooltip html={true}>{stateContent}</ReactTooltip>

                <h4>States with Most Number of Yes Tweets</h4>
                <p>
                    Below are the top 5 states with the most number of yes tweets according to our experiment. We will compare these results to those
                    from the actual CDC data in the <a href='/statistics'>Analysis Page</a>.
                </p>
                <Bar width={300} height={50} data={data} options={options} />

                <hr></hr>
                <br/>
                <div> 
                    <h2> Vaccination Tweets at the County Level</h2>
                </div>
                <CountyMapChart setTooltipContent={setCountyContent} />
                <ReactTooltip html={true}>{countyContent}</ReactTooltip>

                <h4>Counties with Most Number of Yes Tweets</h4>
                <p>
                    Below are the top 5 counties with the most number of yes tweets according to our experiment. We will compare these results to those
                    from the actual CDC data in the <a href='/statistics'>Analysis Page</a>.
                </p>
                <Bar width={300} height={50} data={data2} options={options} />
            </div>
        </div>
    )
}


export default Home;