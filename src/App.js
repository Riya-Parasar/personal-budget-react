import './App.css';
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
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';


function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Menu/>
        <Hero/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
