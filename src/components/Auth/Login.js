import React, { Component } from 'react';
import Header from '../Home/Header';
import {FaUserAlt,FaLock,FaFacebook,FaGooglePlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export default class Login extends Component {
    constructor(){
        super();
        this.onSubmitLogin=this.onSubmitLogin.bind(this);
        this.postData=this.postData.bind(this);
    }
      onSubmitLogin(event){
        event.preventDefault();
        var email = event.target['email'].value;
        var password = event.target['password'].value;
        // this.postData('http://127.0.0.1:8000/api/login',{
        //     email:email,
        //     password:password
        // })
        // .then(data=>{
        //     console.log(data);
        // });
      }
    render() {
    return (
      <div className="loginPage"> 
      <Header/>
       <div className="divLogin">
           <div className="login-form">
           <div className="formLogin">
               <div className="div-login">
               <FaUserAlt className="iconLogin"/>
               </div>
             <form className="text-body" onSubmit={this.onSubmitLogin}>
              <span><FaUserAlt className="user-text"/><input type="email" name="email"  className="input-text" placeholder="Enter your email"/></span><br/><br/>
              <span><FaLock className="user-text"/><input type="password" name="password"  className="input-text" placeholder="Enter your password"/></span><br/><br/>
              <button class="btnLogin"><b>LOGIN</b></button>
                </form> 
                <div className="bottom-form-login">
                    <Link className="link-createAcount" to="/user/register"><p>Craete new Account</p></Link>  <br/>
                    <FaFacebook className="icon-bottom-form"/> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <span><FaGooglePlus className="icon-bottom-form"/> </span>
                </div>
           </div> 
           </div>
       </div>
       <hr/>
      </div>
    );
  }
  async  postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}
// export default withRouter(AddPost); // phải thêm withRoute để history.push hoạt động

