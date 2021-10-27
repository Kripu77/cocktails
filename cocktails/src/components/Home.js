import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';

const Home = () => {
    return (
      <div>
        <Link to="/about">Home</Link>
        <Search/>
      </div>
    );
}

export default Home
