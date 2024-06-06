import React from 'react';
import RequesteForm from '../../Formulaires/RequesteForm';
import { figure } from '../../../Assets/Variables/Variable';

const AboutComponent = ({view, state}) => {

    return (
        <div >
            <header style={{backgroundImage:`url(${figure.uri}${view.headerImage.name})`}} className='centerImage'>
                <h1 className='text-center titlePage'>{view.name}</h1>
            </header>
            <main>
                {state === 'loading' && 
                    <div className="spinner-border text-primary mx-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                <section className='container'>
                    {view.pageSections && 
                        view.pageSections.map((section, index)=>{
                            return(
                                <article key={index} className='py-4 text-white'>
                                    <h2 className='text-center h1 fw-bold'>{section.title}</h2>
                                    {section.title === "Nous contacter" &&
                                        <RequesteForm/>
                                    }
                                    <p className='text-center'>{section.content}</p>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                    {section.images && 
                                        section.images.map((image, index)=>{
                                            return (
                                                <div key={index} style={{backgroundImage:`url(${figure.uri}${image.name})`}} className='carrouselImage centerImage rounded'></div>
                                            )
                                        })
                                    }
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
            </main>
        </div>
    );
};

export default AboutComponent;