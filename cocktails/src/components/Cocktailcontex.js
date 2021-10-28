import React, {useState, useEffect, useContext} from 'react'


//create context 
const createUserContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const Cocktailcontext = ({children}) => {

    const[isLoading, setIsLoading] = useState(true);
    const[ isError, setIsError] = useState(false);
    const [ data, setData] = useState([]);
    const[input, setInput] = useState("");


    //fetch data inside useEffect

    const fecthFn=()=>{
fetch(url)
.then((resp)=>{
 
    if(resp.status>=200 || resp.status<=299){
        return resp.json();
    }
    else{
        setIsLoading(false)
        setIsError(true);
    }
})
.then((data)=>{
setData(data)
console.log(data)
setIsLoading(false)
setIsError(false)
})
.catch((err)=>{console.error(err)
setIsError(true)})
    }



    useEffect(()=>{
 fecthFn();
    },[])

    
    return (
        <div>
            
            <createUserContext.Provider value={{isLoading, isError, data, input}}>
{children}
            </createUserContext.Provider>
        </div>
    )
}
 
//set up custom hook

export const useCreateUserContext = ()=>{
    return useContext(createUserContext);
}

