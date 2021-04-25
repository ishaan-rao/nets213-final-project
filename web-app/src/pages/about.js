import '../App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import NavigationPanel from '../components/NavigationPanel';

class About extends React.Component {


    render() {
        return (
            <div>
                <NavigationPanel/>
                <br/>
                <h1>About this project</h1>
            </div>
        )
    }
}


export default About;