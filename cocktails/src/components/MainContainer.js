import React from 'react'
import { useCreateUserContext } from './Cocktailcontex'
const MainContainer = () => {
    const{data} = useCreateUserContext;
    console.log(data)
    return (
        <section className='drinks-panel'>
<h1> Displays here</h1>
        </section>
    )
}

export default MainContainer
