import React, {useState} from 'react'
import { useCreateUserContext } from './Cocktailcontex'
import { useParams, Link } from 'react-router-dom';
import Rating from "react-rating"

const Individual = () => {

    const [newData, setNewData] = useState([]);
const{id} = useParams();

//state for the corresponding id data


console.log(id)



    const{isLoading, data, setData}  = useCreateUserContext();
   
     const { drinks } = data;
      const fnlData = drinks.filter((value) => {
        return value.idDrink ===id;
      });
    console.log(fnlData)

    return (
      <section className="individual-item">
          <Link to="/">
              <button>Back to Home</button>
          </Link>
  {
     fnlData.map((checkData)=>{
        const { idDrink, strCategory, strDrinkThumb, strAlcoholic, strGlass, strIngredient1, strIngredient2, strIngredient3, strInstructions, strInstructionsDE, strInstructionsIT, 
        strMeasure1,
strMeasure2,
strMeasure3,
strMeasure4 } = checkData;
        return (
          <div key={idDrink} className="single-item">
            <img src={strDrinkThumb} />
            <div className="details">
              <h1>
                <span>Category: </span>
                {strCategory}
              </h1>
              <p>
                <span> Info:</span> {strAlcoholic}
              </p>
              <p>
                {" "}
                <span> Glass: </span>
                {strGlass}
              </p>
              <p>
                <span>Ingredients used:</span> {strIngredient1},{" "}
                {strIngredient2},{strIngredient3}.
              </p>
              <p>
                <span>More Info:</span>
                {strInstructionsDE} {strInstructionsDE}
              </p>
              <p>
                {" "}
                <span> Sizes: </span> {strMeasure1}, {strMeasure2},{" "}
                {strMeasure3}
              </p>
              <h4>
                {" "}
                Rate the Item: <Rating initialRating={3}  />
              </h4>
            </div>
          </div>
        );

      })
  }
      
      </section>
    );
}

export default Individual
