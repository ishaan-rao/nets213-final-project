import logo from '../logo.svg';
import '../App.css';
import React from "react";
import MapChart from "../MapChart";
// import {Nav, Navbar} from 'react-bootstrap';
import NavigationPanel from '../components/NavigationPanel';

import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';
class Home extends React.Component {


    render() {
        return (
            <div>
                <NavigationPanel/>
                <br/>
                <MapChart />
            </div>
        )
    }
}


export default Home;