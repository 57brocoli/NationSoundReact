import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { imageArtiste } from '../../../../Assets/Variables/Variable';
import {motion} from 'framer-motion'

const ProgrammeArtisteCards = ({episode,index}) => {
    return (
        <motion.div initial={{ x: '900%', opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ type: 'spring', stiffness: 400, damping: 30, delay: index * 0.2 }}>
            <NavLink
            style={{backgroundImage:`url(${imageArtiste.uri}${episode.artiste.featuredImage})`}}  
            className='progCard centerImage  d-flex flex-column align-items-center justify-content-end text-decoration-none text-white' to={`/episode/${episode.id}`}>
                <h4>{episode.artiste.name}</h4>
                <h4>{moment(episode.hour).format('H:mm')}</h4>
            </NavLink>
        </motion.div>
    );
};

export default ProgrammeArtisteCards;