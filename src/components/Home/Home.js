import React, { Component } from 'react'
import Header from './Header';
import MapMain from './MapMain';
import Bottom from './Bottom';
export default class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <Header />
                <MapMain />
                <Bottom />
            </div>
        )
    }

}
