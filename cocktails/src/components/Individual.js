import React from 'react'
import { useCreateUserContext } from './Cocktailcontex'
import { useParams, Link } from 'react-router-dom';

const Individual = () => {
const{id} = useParams();
console.log(id)



    const{isLoading, data, setData}  = useCreateUserContext();
   
     const { drinks } = data;
      const fnlData = drinks.filter((value) => {
        return value.idDrink ===id;
      });
      const check = [...fnlData]
      console.log(check)

      const {
        strIngredient1,
        strGlass,
        strCategory,
        strAlcoholic,
        strIngredient2,
        strIngredient3,
        strInstructions,
        strInstructionsDE,
        strMeasure1,
        strInstructionsIT,
        strDrinkThumb,
       } = check;
      console.log(strDrinkThumb)
    return (
      <section className="individual-item">
        <img src={strDrinkThumb} />
        <div></div>
      </section>
    );
}

export default Individual
