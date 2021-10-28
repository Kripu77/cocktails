import React, {useRef, useEffect} from 'react'
  import { init } from "ityped";
  import { useCreateUserContext } from './Cocktailcontex';

const Search = () => {
const {input, setInput} = useCreateUserContext();

    const textRef = useRef(null);
    useEffect(()=>{
 init(textRef.current, {
   showCursor: false,
   strings: ["Hola", "Hello", "Namaste", "Bonjur"],
   typeSpeed: 200,
   backSpeed:200,
   cursorChar: "|",
 });
    },[])
   
    
    return (
      <section className="form">
        <div className="form-section">
          <h1 ref={textRef} className='blink'> </h1>
         <label htmlFor='name'> Search Your Favourite Cocktail</label>
          <form>
            <input type="text" id="name" value={input} onChange={(e)=>setInput(e.target.value)}></input>
          </form>
        </div>
      </section>
    );
}

export default Search
