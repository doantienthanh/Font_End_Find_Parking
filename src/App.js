// Import Labrary
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import components
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from'./components/Auth/Register';
// import Css
import './CSS/auth.css';
import './CSS/home.css';
class App extends Component { 
  constructor(){
    super();
    this.postData=this.postData.bind(this);
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
  render() {
    return (
       <Router>
         <Switch>
         <Route path='/user/login'>
         <Login postData={this.postData}/>
         </Route>
         <Route path='/user/register' component={Register}/>
         <Route path='/' component={Home}/>
         </Switch>
       </Router>
    )
  }
}
export default App;