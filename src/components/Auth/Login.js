import React, { Component } from 'react';
import Header from '../Home/Header';
import {FaUserAlt,FaLock,FaFacebook,FaGooglePlus} from 'react-icons/fa';
import {Link, withRouter} from 'react-router-dom';
import Cookies  from 'js-cookie';
 class Login extends Component {
    constructor(){
        super();
        this.onSubmitLogin=this.onSubmitLogin.bind(this);
        this.state={
          errorEmail:true,
          errorPassword:true,
          error:true
        }
    }
      onSubmitLogin(event){
        event.preventDefault();
        var email = event.target['email'].value;
        var password = event.target['password'].value;
        if(email===""){
          this.setState({errorEmail:'Bạn chưa nhập email !'});
        }else if(password===""){
          this.setState({errorPassword:'Bạn chưa nhập mật khẩu !',errorEmail:true});
        }else{
          this.setState({errorPassword:true,errorEmail:true});
          this.props.postData('http://127.0.0.1:8000/api/user/login',{
            email:email,
            password:password
        })
        .then(data=>{
         if(data.status===200){
          Cookies.set('user_id',data.user_id,{ expires:7});
          this.props.history.push('/');
         }else{
           this.setState({error:'email hoặc mật khẩu của bạn sai !'});
         }
        });
        }
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
              <b className="error">{this.state.errorEmail}</b> <br/>
              <span><FaUserAlt className="user-text"/><input type="email" name="email"  className="input-text" placeholder="Enter your email"/></span><br/>
              <b className="error">{this.state.errorPassword}</b> <br/>
              <span><FaLock className="user-text"/><input type="password" name="password"  className="input-text" placeholder="Enter your password"/></span><br/>
              <b className="error">{this.state.error}</b>
              <button className="btnLogin"><b>LOGIN</b></button>
                </form> 
                <div className="bottom-form-login">
                    <Link className="link-createAcount" to="/user/register"><p>Craete new Account</p></Link> 
                    <FaFacebook className="icon-bottom-form"/> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <span><FaGooglePlus className="icon-bottom-form"/> </span>
                </div>
           </div> 
           </div>
       </div>
       <hr/>
      </div>
    );
  }
  
}
export default withRouter(Login);
// export default withRouter(AddPost); // phải thêm withRoute để history.push hoạt động

