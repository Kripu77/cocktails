import React from 'react'
import { useCreateUserContext } from './Cocktailcontex'
import { Link } from 'react-router-dom';

import LazyLoad  from 'react-lazyload';
import { motion } from "framer-motion";
const MainContainer = () => {
    const{data, isError} = useCreateUserContext();
const{drinks} = data;
console.log(drinks)
    return (
        <section className='drinks-panel'>

{
    drinks.map((value)=>{
        const {idDrink, strCategory, strDrinkThumb, strIngredient1, strIngredient3, strIngredient2, strGlass } = value;
        return (
          <motion.div className="drinks-component" key={idDrink}>
            <LazyLoad height={1000} offset={100}>
              <img src={strDrinkThumb} />
              <h3> {strCategory}</h3>
              <h4>Alcoholic</h4>
              <h5> {strGlass}</h5>
              <Link to={`/individual/${idDrink}`}>
                <button> Details</button>
              </Link>
            </LazyLoad>
          </motion.div>
        );

    })
}
        </section>
    )
}

export default MainContainer
