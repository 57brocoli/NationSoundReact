import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { imageArtiste } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtistes } from '../../../../redux/reducers/ArtistesReducers';

const ArtisteComponent = () => {

    const artistes = useSelector(state => state.artistes.artistes)

    return (
        <div className='doc container'>
            <h1 className='titleA text-center'>Artiste</h1>
            <hr className='text-white'/>
            {artistes &&
                artistes.map((artiste)=>{
                    return(
                        <NavLink key={artiste.id} className='text-decoration-none' to={`/artiste/${artiste.id}`}>
                            <article key={artiste.id} className='text-white d-xl-flex my-3'>
                                <div style={{backgroundImage:`url("${imageArtiste.uri}${artiste.featuredImage}")`}} className='col col-xl-3 centerimg imgA rounded'/>
                                <div className='mx-xl-3 py-2'>
                                    <h2 className='fontRaph'>{artiste.name}</h2>
                                    <p style={{height:90, overflow:'hidden'}}>{artiste.description}</p>
                                    <button className='btn btn-outline-light'>Voir plus</button>
                                </div>
                            </article>
                        </NavLink>
                    )
                })
            }
        </div>
    );
};

export default ArtisteComponent;

