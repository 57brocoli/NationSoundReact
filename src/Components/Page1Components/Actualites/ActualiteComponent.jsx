import React from 'react';
import { figure } from '../../../Assets/Variables/Variable';
import FaqComponent from './SousComposants/FaqComponent';
import ArticleComponent from './SousComposants/ArticleComponent';

const ActualiteComponent = ({view, state}) => {

    return (
        <div className='doc'>
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
                                <h2>Actualités</h2>
                            </div>
                            <hr className='container my-0'/>
                        </div>
                        <ArticleComponent/>
                    </article>
                </section>
                <section>
                    <article className='text-white py-4 container'>
                        <h2>FAQ</h2>
                        <FaqComponent/>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default ActualiteComponent;