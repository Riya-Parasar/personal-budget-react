import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
    }  from "react-router-dom";

function Menu() {
  return (
    <nav aria-label="Main Navigation">
    <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about.html">About</Link></li>
        <li><Link to="/login.html">Login</Link></li>
        <li><Link to="https://google.com">Google</Link></li>
    </ul>
</nav>
  );
}

export default Menu;