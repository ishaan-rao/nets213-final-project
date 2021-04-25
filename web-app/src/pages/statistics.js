
import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import NavigationPanel from '../components/NavigationPanel';

class Statistics extends React.Component {


    render() {
        return (
            <div>
                <NavigationPanel/>
                <br/>
                <h1>Statistics</h1>
            </div>
        )
    }
}


export default Statistics;