import React from 'react'
import { Link } from 'react-router-dom';
import { useGloBal } from '../Context'
import Loading from './Loading';
const CookTails = () => {
    const { loading, setAllItem, setLoading, searchItem, setSearchItem, AllItem } = useGloBal();
    if(AllItem.length==0)
       return(
        <h1 className='container'>Item Not Found</h1>
       )
    if(loading)
      return(
        <Loading/>
      )
    return (
        <>
            <div className='container'>
                <div className='row row-cols-3'>
                    {
                        AllItem.map((elem) => {
                            return (
                                <>
                                    <div className='col text-center m-2 p-3' id='card'>
                                        <div className='col ' style={{color:"green"}}>
                                            <h1>{elem.name}</h1>
                                        </div>
                                        <div className='col'>
                                            <img src={elem.image}></img>
                                        </div>
                                        <div className='col' style={{color:"blue"}}>
                                            <b>{elem.glass}</b>
                                        </div>
                                        <div className='col' style={{color:"GrayText"}}>
                                            <h3>{elem.info}</h3>
                                        </div>
                                        <div className='col'>
                                        <Link to={`cooktail/${elem.id}`}>
                                            <button className='btn btn-outline-secondary'>ReadMore</button>
                                        </Link>
                                        </div> 
                                    </div>

                                </>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CookTails