import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import MainContainer from './MainContainer';
import Search from './Search';
import { useCreateUserContext } from './Cocktailcontex';
import Noresults from './Noresults';

const Home = () => {
   const {data, isError} = useCreateUserContext();
   const{drinks} = data;
   if(drinks<1){
       return <Noresults/>
   }

  console.log(drinks)
    return (
      <div className='home-container'>
 
        <Search/>
        <MainContainer/>
       
      </div>
    );
}

export default Home
