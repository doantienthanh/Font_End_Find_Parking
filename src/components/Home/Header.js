import React, { Component } from 'react'

import {FaUser} from 'react-icons/fa'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
              <FaUser/>
            </div>
        )
    }
}
