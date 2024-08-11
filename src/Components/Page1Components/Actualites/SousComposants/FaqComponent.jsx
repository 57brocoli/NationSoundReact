import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFaqs } from '../../../../../redux/reducers/FaqReducers';

function FaqComponent() {

    const faqs = useSelector(state => state.faqs.faqs)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchFaqs())
    },[dispatch])

    return (
        <>
            {faqs &&
                faqs.map(faq=>{
                    return(
                        <div className='container border rounded my-3'>
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
        </>
        
    )
}

export default FaqComponent