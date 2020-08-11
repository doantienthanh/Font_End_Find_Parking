import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FaUser, FaSignInAlt, FaAlignJustify, FaSignOutAlt } from 'react-icons/fa';
import Cookies from 'js-cookie';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      profile: ''
    }
    this.getUser = this.getUser.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.checkLogin();
    this.logout = this.logout.bind(this);
  }
  // Xóa cookie
  logout() {
    Cookies.remove('user_id');
  }
  async getUser(url = '', checkCookie = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Authorization': checkCookie
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // Kiểm tra xem user có đã login hay chưa
  checkLogin() {
    var checkCookie = Cookies.get('user_id');
    if (checkCookie !== '') {
      this.getUser('http://127.0.0.1:8000/api/user/getProfile', checkCookie)
        .then(d => {
          this.setState({ profile: d.user.name });
        });
    } else {
      this.setState({ profile: '' });
    }
  }
  render() {
    var profiled = this.state.profile;
    var btnLogin;
    var btnRegister;
    if (profiled === '') {
      btnLogin = <Link className="link_remove" to="/user/login"><FaUser className="icon_menuHeder"></FaUser>  </Link>;
      btnRegister = <Link className="link_remove" to="/user/register"><FaSignInAlt className="icon_menuHeder"> </FaSignInAlt></Link>;
    } else {
      btnLogin = <div className="icon_menuHeder"><b className="nameOfuser">{profiled}</b></div>;
      btnRegister = <a className="link_remove" href="/"><FaSignOutAlt className="icon_menuHeder" onClick={this.logout} /></a>
    }
    return (
      <div className="header">
      <Link to="/" className="link_remove"><FaAlignJustify className="iconHeaderHome" />&ensp;&ensp;&ensp;<span className="textInHeader"><b>PARKING FREE</b></span></Link>
        {btnRegister}
        {btnLogin}
      </div>
    )
  }
}
export default withRouter(Header);