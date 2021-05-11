
import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import NavigationPanel from '../components/NavigationPanel';
import { Bar } from 'react-chartjs-2';

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

  const data3 = {
    labels: ['California', 'Texas', 'New York', 'Florida', 'Pennsylvania'],
    datasets: [
      {
        label: '# of Vaccinations (in millions)',
        data: [20.54, 11.6, 9.725, 9.4512, 6.78],
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

  const data4 = {
    labels: ['Los Angeles County, CA', 'Cook County, IL', 'Harris County, TX', 'Maricopa County, AZ', 'San Diego County, CA'],
    datasets: [
      {
        label: '# of Vaccinations (in millions)',
        data: [3.614, 1.8025, 1.3667, 1.30065, 0.86788],
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


const Statistics = () => {
    return (
        <div>
            <NavigationPanel/>
            <br/>
            <div className="cont">
                <h1>Analysis</h1>
                <p>
                Overall, we would probably conclude that our experiment was not entirely successful. When comparing the results we found to the actual CDC data, we found that we were limited by the data that we were able to collect. Also, when comparing our data to the actual data, we didn’t have similar results in terms of which states were vaccinated the most. Our hypothesis for this result was that we just received more results from states with higher populations, but since our sample size wasn’t large enough (due to data collection limitations), our results were slightly skewed from the actual results.
                </p>

                <p>
                Our data showed that California, New York, Texas, Florida, and Ohio were the most vaccinated states. Actual CDC data has shown that California, Texas, New York, Florida, and Pennsylvania are the most vaccinated states. Our data showed that Los Angeles County, CA, Cook County, IL, San Diego County, CA, King County, WA, and Clark County, CA were the most vaccinated counties in the US. Actual CDC data has shown that Los Angeles County, CA, Cook County, IL, Harris County, TX, Maricopa County, AZ, and San Diego County, CA were the most vaccinated counties in the US.
                </p>

                <p>
                Despite being limited in our data collection, we still felt that our project had some positive outcomes. In terms of states, we correctly identified 4 of the top 5 vaccinated states (albeit in the wrong order), and in terms of counties, we correctly identified 3 of the top 5 vaccinated counties (again in the wrong order). We also learned a great deal from this project in terms of how to run a crowdsourcing experiment, and what bottlenecks are important to consider prior to designing the experiment. In the future, we feel much better suited to conduct a similar experiment, because we have now encountered many of the issues that could arise in other projects, and can creatively generate solutions to those issues. 
                </p>

                <h4>Challenges</h4>
                <p>The biggest challenge was gathering enough distinct tweets that could potentially represent a user getting a COVID vaccine. Many tweets we encountered were duplicates of each other, were retweets instead of originals, or didn’t have a location tied to them (around 80% of the tweets did not have location). Additionally, due to financial and time constraints we couldn’t gather enough tweets to fully scale up our project to the level that we wanted.</p>
                <p>We believe that our results deviated primarily from the lack of a large enough sample size. We were only able to scrape around 10,000 tweets before running into significant duplicates in the data (retweets are one example of this). Additionally, only about half of the workers that we hired for our classification of tweets on Mechanical Turk actually passed the gold standard checks we enabled for quality control. This led to our final dataset only having about 5,000 tweets. Considering there are 3,006 counties in the United States, this is a very small sample size.</p>
                
                <hr/>
                <h4>States with Most Number of Yes Tweets</h4>
                <p>
                    Below are the top 5 states with the most number of yes tweets according to our experiment.
                </p>
                <Bar width={300} height={50} data={data} options={options} />

                <h4>States with Most Number of COVID-19 Vaccinations</h4>
                <p>
                    Below are the top 5 states with the most number of vaccinations according to the CDC.
                </p>
                <Bar width={300} height={50} data={data3} options={options} />

                <h4>Counties with Most Number of Yes Tweets</h4>
                <p>
                    Below are the top 5 counties with the most number of yes tweets according to our experiment.
                </p>
                <Bar width={300} height={50} data={data2} options={options} />

                <h4>Counties with Most Number of COVID-19 Vaccinations</h4>
                <p>
                    Below are the top 5 counties with the most number of vaccinations according to the CDC.
                </p>
                <Bar width={300} height={50} data={data4} options={options} />
                <hr/>
                <br/>
                <h1>CDC Data</h1>
                <h4>Vaccinations at the State Level</h4>
                <img width={800} src="cdc_states.png"></img>

                <br/>
                <br/>
                <h4>Vaccinations at the County Level</h4>
                <img width={800} src="cdc_counties.png"></img>

                <br/>
                <br/>
                <h4>Vaccinations over Time in the U.S.</h4>
                <img width={800} src="timeseries.png"></img>

                <br/>
                <br/>
                <h4>Forecast for Herd Immunity</h4>
                <img width={800} src="forecast.png"></img>
            </div>
            
        </div>
    )
}


export default Statistics;