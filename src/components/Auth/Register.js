import React, { Component } from 'react';
import Header from '../Home/Header';
import { FaUserAlt, FaLock, FaAddressCard, FaUserShield, FaEnvelope } from 'react-icons/fa';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import Bottom from '../Home/Bottom';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      error: true,
      errorEmail: true
    }
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
  }
  onSubmitRegister(event) {
    event.preventDefault();
    var fullName = event.target['fullName'].value;
    var address = event.target['address'].value;
    var position = event.target['position'].value;
    var email = event.target['email'].value;
    var password = event.target['password'].value;
    var passwordConfirm = event.target['passwordConfirm'].value;
    if (fullName === "" || address === "" || email === "" || password === "" || passwordConfirm === "") {
      this.setState({ error: 'You must enter full information !' });
    } else if (password !== passwordConfirm) {
      this.setState({ error: 'Your password incorrect !' });
    } else {
      this.setState({ error: true });
      this.props.postData('http://127.0.0.1:8000/api/user/register', {
        name: fullName,
        address: address,
        position: position,
        email: email,
        password: password
      })
        .then(data => {
          if (data.status === 200) {
            Cookies.set('user_id', data.user_id, { expires: 7 });
            this.props.history.push('/');
          } else {
            this.setState({ errorEmail: "This email already exists !" });
          }
        });
    }
  }
  render() {
    return (
      <div className="Register">
        <Header />
        <div className="body-Register">
          <div className="form-register">
            <div className="content-register">
              <div className="header-formRegister">
                <h1>SIGN UP</h1>
              </div>
              <div className="body-formRegister">
                <b className="error-registers">{this.state.error}</b>
                <form onSubmit={this.onSubmitRegister}>
                  <span><FaUserAlt className="user-text" /><input type="text" name="fullName" className="input-text" placeholder="Enter your full name" /></span><br />
                  <span><FaAddressCard className="user-text" /><input type="text" name="address" className="input-text" placeholder="Enter your address" /></span><br />
                  <span><FaUserShield className="user-text" />
                    <select className="input-text" name="position">
                      <option value="cars user">cars user</option>
                      <option value="keeper parking">kepper parking</option>
                    </select></span> <br></br>
                   <b className="error">{this.state.errorEmail}</b>
                  <span><FaEnvelope className="user-text" /><input type="email" name="email" className="input-text" placeholder="Enter your email" /></span><br />
                  <span><FaLock className="user-text" /><input type="password" name="password" className="input-text" placeholder="Enter your password" /></span><br />
                  <span><FaLock className="user-text" /><input type="password" name="passwordConfirm" className="input-text" placeholder="confirm your password" /></span><br />
                  <button className="btn-register"><b>SUBMIT</b></button>
                </form>
              </div>
              <div className="bottom-formRegister">
                <Link to="/user/login" className="link-createAcount">Go to Login</Link>
              </div>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
export default withRouter(Register);