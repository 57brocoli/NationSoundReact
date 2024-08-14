import React, { useEffect, useState } from 'react';
import SponsorCard from './SousComposants/SponsorCard';
import { figure } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSponsors } from '../../../../redux/reducers/SponsorsReducers';

const SponsorComponent = ({view, state}) => {

    const sponsors = useSelector(state => state.sponsors.sponsors)

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
                
                {sponsors ?
                sponsors.map((sponsor, index) => {
                    return(
                        <SponsorCard key={sponsor.id} sponsor={sponsor} index={index}/>
                    )
                })
                :
                'Un problème est survenu.'
                }
                
            </main>
        </div>
    );
};

export default SponsorComponent;