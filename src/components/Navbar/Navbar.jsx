import React, { Component } from 'react';
import './Navbar.css';
import SearchBox from '../SearchBox';
import UnitComponent from '../UnitComponent';

class Navbar extends Component {

    sendNewUnitToParent = (newUnit) => {
        this.props.changeUnit(newUnit);
    }

    sendQueryStringToParent = (query) => {
        this.props.searchSubmit(query);
    }

    render() {
        return (
            <nav>
                <ul className="navbar-container">
                    <li className="navbar-list-item">
                        <SearchBox searchSubmit={this.sendQueryStringToParent} />
                    </li>
                    ...
        </ul>
            </nav>
        );
    }
}

export default Navbar;