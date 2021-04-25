
import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import NavigationPanel from '../components/NavigationPanel';

class Data extends React.Component {


    render() {
        return (
            <div>
                <NavigationPanel/>
                <br/>
                <h1>Data and Methodology</h1>
            </div>
        )
    }
}


export default Data;