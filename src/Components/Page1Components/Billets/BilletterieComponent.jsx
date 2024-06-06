import React, { useEffect, useState } from 'react';
import { figure, imgBillet } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBillets } from '../../../../redux/reducers/BilletsReducers';

const BilletterieComponent = ({view}) => {

    const dispatch = useDispatch()
    const billets = useSelector(state=> state.billets.billets)

    useEffect(()=>{
        dispatch(fetchBillets())
    },[dispatch])

    const redirect = () =>{
        alert('Vous allez être rediriger vers le site de la billetterie')
    }
    
    return (
        <>
            <header style={{backgroundImage:`url(${figure.uri}${view.headerImage.name})`}} className='centerImage'>
                <h1 className='text-center titlePage'>{view.name}</h1>
            </header>
            <main>
                <article className='container text-white py-4'>
                    <h5 className='text-center'>{view.headerText}</h5>
                    {billets &&
                        billets.map((billet, index)=>{
                            return(
                                <div key={index} className='my-3'>
                                    <div style={{backgroundImage:`url(${imgBillet.uri}${billet.featuredImage})`}} className='imgBillet centerImage rounded' onClick={redirect}>
                                        <h2 className='p-3'>{billet.name}</h2>
                                        <p className='px-3'>{billet.description}</p>
                                        <p className='p-3'>Prix : {billet.price} &euro;</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </article>
            </main>
        </>
    );
};

export default BilletterieComponent;