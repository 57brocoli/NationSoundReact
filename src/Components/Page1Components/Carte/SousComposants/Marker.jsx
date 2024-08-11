import React from 'react'
import { NavLink } from 'react-router-dom'
import { imageLieu } from '../../../../Assets/Variables/Variable'

function Marker({lieu}) {

    return (
        <>
            <NavLink to={`/lieu/${lieu.id}`} style={{width:320, height:'25%', position:"absolute", bottom:20, left:20}} className='rounded d-flex flex-column justify-content-between text-decoration-none text-white backgroundColor'>
                <div style={{backgroundImage:`url(${imageLieu.uri}${lieu.featuredImage})`, height:'50%'}} className='center rounded text-end'>
                </div>
                <div className='d-flex flex-column justify-content-between' style={{height:'50%'}}>
                    <h3 className='m-auto'>{lieu.name}</h3>
                    <button className='btn btn-warning'>
                        ouvrir
                    </button>
                </div>
            </NavLink>
        </>
    )
}

export default Marker