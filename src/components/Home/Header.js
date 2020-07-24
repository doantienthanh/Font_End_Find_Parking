import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FaUser,FaSignInAlt, FaAlignJustify} from 'react-icons/fa'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                 <FaAlignJustify className="iconHeaderHome"/>&ensp;&ensp;&ensp;<span className="textInHeader"><b>PARKING FREE</b></span>
                 <Link className="link_remove" to="/user/register"><FaSignInAlt className="icon_menuHeder"/> </Link>  
                 <Link className="link_remove"  to="/user/login"><FaUser className="icon_menuHeder"/></Link>   
            </div>
        )
    }
}
