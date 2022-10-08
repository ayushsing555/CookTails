import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
const Appcontext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const Context = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchItem, setSearchItem] = useState("do");
    const [AllItem, setAllItem] = useState([]);
    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const data = await fetch(`${url}${searchItem}`);
            const org_data = await data.json();
            const {drinks} = org_data;
            if(drinks){
                const newCookTails = drinks.map((elem)=>{
                    const{
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                        strInstructions,

                    }  = elem
                    return{
                        id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        info:strAlcoholic,
                        glass:strGlass,
                        instruction:strInstructions
                    }
                })
                setAllItem(newCookTails);
            }
            else{
                setAllItem([]);
            }
            setLoading(false);
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    },[searchItem])
    useEffect(()=>{
         fetchData(`${url}${searchItem}`);
    },[searchItem,fetchData])
    return (
        <>
            <Appcontext.Provider value={{loading,setAllItem,setLoading,searchItem,setSearchItem,AllItem}}>
          {children}
        </Appcontext.Provider>
        
        </>
    )
}
const useGloBal=()=>{
     return useContext(Appcontext);
}


export {Appcontext,Context,useGloBal};