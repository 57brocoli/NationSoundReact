import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { figure } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFaqs } from '../../../../redux/reducers/FaqReducers';
import FaqComponent from './SousComposants/FaqComponent';
import ArticleComponent from './SousComposants/ArticleComponent';

const ActualiteComponent = ({view, state}) => {

    const faqs = useSelector(state => state.faqs.faqs)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchFaqs())
    },[dispatch])

    return (
        <div>
            <header style={{backgroundImage:`url(${figure.uri}${view.headerImage.name})`}} className='centerImage'>
                <h1 className='text-center titlePage'>{view.name}</h1>
            </header>
            <main>
                {state === 'loading' && 
                    <div className="spinner-border text-primary mx-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                <h5 className='text-center text-white container py-4'>{view.headerText}</h5>
                <section>
                    <article className='text-white py-4'>
                        <div className='pb-2 container'>
                            <div className='d-flex justify-content-between mb-1'>
                                <h2>Actualité</h2>
                            </div>
                            <hr className='container my-0'/>
                        </div>
                        <ArticleComponent/>
                    </article>
                </section>
                <section>
                    <article className='text-white py-4'>
                        <h2 className='container'>FAQ</h2>
                        {faqs &&
                            faqs.map(faq=>{
                                return(
                                    <FaqComponent key={faq.id} faq={faq}/>
                                )
                            })
                        }
                    </article>
                </section>
            </main>
        </div>
    );
};

export default ActualiteComponent;