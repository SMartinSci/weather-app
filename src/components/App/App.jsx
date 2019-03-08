import React, { Component } from 'react';
import Navbar from '../Navbar';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <span><i className="fab fa-react"></i></span>
                <span>Weather App</span>
                <span><i className="wi wi-day-sunny"></i></span>
            </div>
        );
    }

    render() {
        return (
            <Navbar />
        );
    }
}

export default App;