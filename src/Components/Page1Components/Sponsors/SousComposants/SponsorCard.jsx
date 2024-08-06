import React, { useState } from 'react';
import { imgSponsor, logoSponsor } from '../../../../Assets/Variables/Variable';
import {motion} from 'framer-motion'

const SponsorCards = ({sponsor, index}) => {

    const pair = index % 2 === 0

    return (
        <motion.div
        key={sponsor.id}
        initial={{ x: pair ? 100 : -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2}}
        >
            <article className='sponsorContainer'>
                <div style={{backgroundImage:`url(${imgSponsor.uri}${sponsor.imageSponsors[0].name})`}} className='imgArticle centerImage d-flex rounded sponsor'>
                    <img src={logoSponsor.uri + sponsor.logo} alt="sponsorimage" className='align-self-center ms-xl-3 m-2 rounded p-xl-4 imgSponsor'/>
                    <p className='text-white text-center sponsorName col align-self-center me-xl-5 mb-0'>{sponsor.name}</p>  
                </div>
            </article>
        </motion.div>
    );
};

export default SponsorCards;