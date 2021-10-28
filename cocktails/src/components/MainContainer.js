import React from 'react'
import { useCreateUserContext } from './Cocktailcontex'
import { Link } from 'react-router-dom';
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
          <div className="drinks-component" key={idDrink}>
            <img src={strDrinkThumb} />
            <h3> {strCategory}</h3>
            <h4>Alcoholic</h4>
            <h5> {strGlass}</h5>
            <Link to={`/individual/${idDrink}`}>
              <button> Details</button>
            </Link>
          </div>
        );

    })
}
        </section>
    )
}

export default MainContainer
