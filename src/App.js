import React, { useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logout from './Logout';
import ChartComponent from './Chart';
import SignUp from './SignUp';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [showHomepage, setShowHomepage] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(true); // Initially showing the signup page

  const handleShowHomepage = () => {
    setShowHomepage(true);
  };

  const handleShowChart = () => {
    setShowChart(true);
  };

  const handleHideHomepage = () => {
    setShowHomepage(false);
  };

  const handleHideChart = () => {
    setShowChart(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false); // Hide the signup page when showing the login
  };

  const handleReturnToSignup = () => {
    setShowSignup(true); // Show the signup page again
    setShowLogin(false); // Hide the login page
  };

  const buttonStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#39FF14', /* Neon green color */
    color: 'white',
    margin: '5px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="App">
      {showSignup && <SignUp />}
      {showLogin && <LoginPage />}
      <Logout />
      <button
        onClick={handleShowHomepage}
        style={{ ...buttonStyle }}
      >
        Show Homepage
      </button>
      {showHomepage && (
        <button
          onClick={handleHideHomepage}
          style={{ ...buttonStyle }}
        >
          Hide Homepage
        </button>
      )}
      {showHomepage && <HomePage />}
      
      <button
        onClick={handleShowChart}
        style={{ ...buttonStyle }}
      >
        Show Dashboard
      </button>
      {showChart && (
        <button
          onClick={handleHideChart}
          style={{ ...buttonStyle }}
        >
          Hide Dashboard
        </button>
      )}
      {showChart && <ChartComponent />}

      {!showLogin && !showHomepage && !showChart && (
        <button
          onClick={handleShowLogin}
          style={{ ...buttonStyle }}
        >
          Show Login
        </button>
      )}

      {showLogin && (
        <button
          onClick={handleReturnToSignup}
          style={{ ...buttonStyle }}
        >
          Return to Signup
        </button>
      )}
    </div>
  );
};

export default App;
