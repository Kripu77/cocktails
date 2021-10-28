import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import MainContainer from './MainContainer';
import Search from './Search';
import { useCreateUserContext } from './Cocktailcontex';
import Noresults from './Noresults';
import LazyLoad from "react-lazyload";
import { Helmet } from "react-helmet";

const Home = () => {

    //for react helmet

   
   const {data, isError} = useCreateUserContext();
   const{drinks} = data;
   if(drinks<1){
       return <Noresults/>
   }

  console.log(drinks)
    return (
      <div className="home-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="canonical" href="http://kripukhadka.com" />
        </Helmet>
        <Search />

        <MainContainer />
      </div>
    );
}

export default Home
