import React, { Component } from 'react'
import Header from './Header';
import MapMain from './MapMain';
import Bottom from './Bottom';
import NearPaking from './NearParking';
export default class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <Header />
                <MapMain />
                <NearPaking />
                <Bottom />
            </div>
        )
    }
}
