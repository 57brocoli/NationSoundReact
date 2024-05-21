import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ArticleWpComonent from './ArticleWpComonent';
import ArticlePixeleventCoponent from './ArticlePixeleventCoponent';

const ActualiteComponent = ({view, state, height}) => {

    const [channel, setChannel] = useState('pixelevent')

    const changeChannel = () => {
        if (channel === 'pixelevent') {
            setChannel('backoffice')
        }
        if (channel === 'backoffice') {
            setChannel('pixelevent')
        }
    }

    const [faqs, setFaqs] = useState([]);
    useEffect(()=>{
        axios
        .get('https://pixelevent.site/api/f_a_qs')
        .then(res => setFaqs(res.data['hydra:member']))
    },[])

    const figure = {
        uri: 'https://pixelevent.site/assets/uploads/figure/',
    };

    return (
        <div>
            <header style={{backgroundImage:`url(${figure.uri}${view.headerImage.name})`}} className='centerImage'>
                <h1 className='text-center titlePage'>{view.name}</h1>
            </header>
            <main style={{minHeight: height}}>
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
                                <button className='btn btn-primary' onClick={changeChannel}><i className="fa-solid fa-rotate"></i></button>
                            </div>
                            <hr className='container my-0'/>
                        </div>
                        {channel==='pixelevent' &&
                            <ArticlePixeleventCoponent/>
                        }
                        {channel==='backoffice' &&
                            <ArticleWpComonent/>
                        }
                    </article>
                </section>
                <section>
                    <article className='text-white py-4'>
                        <h2 className='container'>FAQ</h2>
                        {faqs &&
                            faqs.map((faq, index)=>{
                                return(
                                    <div key={index} className='container border rounded my-3'>
                                        <div className='text-center py-3'>
                                            <h3 className='h2'>{faq.question}</h3>
                                        </div>
                                        <hr className='mt-0'/>
                                        <div className='pb-3'>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
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