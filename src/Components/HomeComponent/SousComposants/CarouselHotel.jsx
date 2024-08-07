import React from 'react'
import { NavLink } from 'react-router-dom'
import { imageLieu } from '../../../Assets/Variables/Variable'

function CarouselHotel({hotel}) {
    return (
        <NavLink to={`lieu/${hotel.id}`} className='rounded text-center mx-xl-2 d-flex flex-column justify-content-end text-decoration-none hotelImage' style={{backgroundImage:`url(${imageLieu.uri}${hotel.featuredImage})`}}>
            <p className='h5 fw-bold text-white text-center pb-3 mx-auto'>{hotel.name}</p>
        </NavLink>
    )
}

export default CarouselHotel