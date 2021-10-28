import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import MainContainer from './MainContainer';
import Search from './Search';

const Home = () => {
    return (
      <div className='home-container'>
 
        <Search/>
        <MainContainer/>
        <Footer/>
      </div>
    );
}

export default Home
