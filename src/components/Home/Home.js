import React, { Component } from 'react'
import Header from './Header';
import MapMain from './MapMain';
export default class Home extends Component {
    render() {
        return (
            <div className="homePage">
                 <Header/>
                 <MapMain/>
            </div>
        )
    }
}
