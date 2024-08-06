import React from 'react';
import axios from 'axios'
import { imgSponsor, logoSponsor } from '../../../../Assets/Variables/Variable';

const SponsorCards = ({sponsor}) => {
    return (
        <article className='sponsorContainer'>
            <div style={{backgroundImage:`url(${imgSponsor.uri}${sponsor.imageSponsors[0].name})`}} className='imgArticle centerImage d-flex rounded sponsor'>
                <img src={logoSponsor.uri + sponsor.logo} alt="sponsorimage" className='align-self-center ms-xl-3 m-2 rounded p-xl-4 imgSponsor'/>
                <p className='text-white text-center sponsorName col align-self-center me-xl-5 mb-0'>{sponsor.name}</p>  
            </div>
        </article>
    );
};

export default SponsorCards;