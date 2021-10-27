import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from './Navbar';

const Prouter = () => {
    return (
      <div>
        <Router>
            <Navbar/>
          <switch>
            <Route exact path="/">
              <h3>
                {" Home"}
                <Home />
              </h3>
            </Route>
            <Route path="/about">
              <h3>
                {"About"}
                <About />
              </h3>
            </Route>
          </switch>
        </Router>
      </div>
    );
}

export default Prouter
