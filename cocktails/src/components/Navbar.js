import React from 'react'
import { Link } from 'react-router-dom'
import { useCreateUserContext } from './Cocktailcontex';

const Navbar = () => {
    console.log(useCreateUserContext())
    return (
      <nav>
        <section className="container">
          <section className="mobile-wrapper">
            <h1>
             
              Cocktail <span>DB</span>
            </h1>
          </section>
          <section className="menu-tabs">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            
          </section>
        </section>
      </nav>
    );
}

export default Navbar
