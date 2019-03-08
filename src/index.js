import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './style.css';

const ROOT_NODE = document.getElementById('root');
ReactDOM.render(<App />, ROOT_NODE);

// const WeatherApp = () => (
//     <div>
//         <span><i className="fab fa-react"></i></span>
//         <span>Weather App</span>
//         <span><i className="wi wi-day-sunny"></i></span>
//     </div>
// );

// const ROOT_NODE = document.getElementById('root');
// ReactDOM.render(<WeatherApp />, ROOT_NODE);