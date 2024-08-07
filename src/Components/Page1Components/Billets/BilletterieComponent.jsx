import React, { useEffect, useMemo, useState } from 'react';
import { figure, imgBillet } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBillets } from '../../../../redux/reducers/BilletsReducers';
import Billet from './SousComposants/Billet';

const BilletterieComponent = ({view}) => {

    // const dispatch = useDispatch()
    const billets = useSelector(state=> state.billets.billets)
    // useEffect(()=>{
    //     dispatch(fetchBillets())
    // },[dispatch])

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
                                <Billet billet={billet} key={index} index={index}/>
                            )
                        })
                    }
                </article>
            </main>
        </>
    );
};

export default BilletterieComponent;