import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLieux } from '../../redux/reducers/LieuxReducers'

function Test() {

    const dispatch = useDispatch()
    const lieux = useSelector(state => state.lieux.lieux)

    if (lieux) {
        var hotels = lieux.filter(lieux => lieux.category === 'Hotel')
    }

    useEffect(()=>{
        dispatch(fetchLieux());
    },[dispatch])

    return (
        <div>
            <h1 className='text-center titlePage'>Page de test</h1>
            <section>

            </section>
        </div>

    )
}

export default Test