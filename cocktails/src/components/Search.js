import React, {useRef, useEffect} from 'react'
  import { init } from "ityped";

const Search = () => {
    const textRef = useRef(null);
    useEffect(()=>{
 init(textRef.current, {
   showCursor: false,
   strings: ["Hola", "Hello", "Namaste", "Bonjur"],
   typeSpeed: 400,
   cursorChar: "|",
 });
    },[])
   
    
    return (
      <section className="form">
        <div className="form-section">
          <h1 ref={textRef} className='blink'> </h1>
          <h1> Search Your Favourite Drink</h1>
          <form>
            <input type="text"></input>
          </form>
        </div>
      </section>
    );
}

export default Search
