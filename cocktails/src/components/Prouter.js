import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from './Navbar';
import Footer from './Footer';
import Error from './Error';
import Individual from './Individual';

const Prouter = () => {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <h3>
                <Home />
              </h3>
            </Route>
            <Route path="/about">
              <h3>
                <About />
              </h3>
            </Route>
            <Route path="/individual/:id">
              <Individual />
            </Route>
            <Link exact path="*">
              <Error />
            </Link>
          </Switch>

          <Footer />
        </Router>
      </div>
    );
}

export default Prouter
