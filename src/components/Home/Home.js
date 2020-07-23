import React, { Component } from 'react'
import '../../CSS/home.css';
import Header from './Header';
import MapMain from './MapMain';
export default class Home extends Component {
    render() {
        return (
            <div className="homePage">
                 <Header />
                 <MapMain/>
            </div>
        )
    }
}
