/*import './App.css';
import Menu from './Menu/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
  }  from "react-router-dom";


import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './Home/HomePage';


function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Menu/>
        <Hero/>
        <Routes>
          
          <Route path='/' element={<HomePage/>} />
          <Route path='/Login' element={<LoginPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
} */

import React from 'react';
import LoginPage from './LoginPage/LoginPage' // Import the LoginPage component
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logout from './Logout';
import ChartComponent from './Chart';
import Signup from './SignUp';


const App = () => {
  return (
    <div className="App">
      <Signup/>
      <LoginPage />
      <Logout/>
      <HomePage />
      <ChartComponent/> 
    </div>
  );
};

export default App;


//export default App;
