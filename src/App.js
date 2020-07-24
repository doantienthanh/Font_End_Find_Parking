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
  render() {
    return (
       <Router>
         <Switch>
         <Route path='/user/login' component={Login}/>
         <Route path='/user/register' component={Register}/>
         <Route path='/' component={Home}/>
         </Switch>
       </Router>
    )
  }
}
export default App;