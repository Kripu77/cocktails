import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Search from './Search';

const Home = () => {
    return (
      <div className='home-container'>
 
        <Search/>
        <Footer/>
      </div>
    );
}

export default Home
