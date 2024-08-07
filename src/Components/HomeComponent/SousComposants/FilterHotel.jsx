import React from 'react'
import CarouselHotel from './CarouselHotel'

function FilterHotel({data}) {
    return (
        <>
            {data
                .map(hotel=>{
                    return(
                        <CarouselHotel key={hotel.id} hotel={hotel}/>
                    )
            })}
        </>
    )
}

export default FilterHotel