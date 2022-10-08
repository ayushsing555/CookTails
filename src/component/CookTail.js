import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGloBal } from '../Context'

const CookTail = () => {
    const { AllItem } = useGloBal();
    const { id } = useParams();
    const updateData = AllItem.filter((elem) => {
        return elem.id == id;
    })
    console.log(updateData)
    return (
        <>
            {
                updateData.map((elem) => {
                    return (
                        <div className='container '>
                            <div id='card'>
                                <div className='row d-flex justify-content-center  align-items-center m-4'>
                                    <div className='col'>
                                        <img className='image-fluid' src={elem.image} />
                                    </div>
                                    <div className='col text-center'>
                                        <h1 style={{ color: "green" }}>{elem.id}</h1>
                                        <hr></hr>
                                        <h2>{elem.info}</h2>
                                        <hr></hr>
                                        <h3 style={{ color: "blue" }}>{elem.name}</h3>
                                        <hr></hr>
                                        <b style={{ color: "grey" }}>{elem.instruction}</b>
                                    </div>
                                    <Link to="/">
                                        <button className='btn btn-outline-secondary'>CookTails</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default CookTail