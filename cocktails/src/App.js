import React from 'react'
import { useCreateUserContext } from './components/Cocktailcontex'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Prouter from './components/Prouter'
import "./css/style.css"

const App = () => {
    document.title="Cocktail DB"
     const { isLoading } = useCreateUserContext();

     if(isLoading){
         return <Loading/>
     }
    return (
      <main>
       

        <Prouter />
      </main>
    );
}

export default App
