import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { imageLieu } from '../../../../Assets/Variables/Variable';

const EpisodeArtisteCards = ({episode}) => {
    return (
        <NavLink style={{backgroundImage:`url(${imageLieu.uri}${episode.lieu.featuredImage})`}} className='carrouselImage centerImage rounded d-flex flex-column align-items-center justify-content-end text-decoration-none text-white' to={`/episode/${episode.id}`}>
            <h4>{episode.lieu.name}</h4>
            <h4>{moment(episode.hour).format('H:mm')}</h4>
        </NavLink>
    );
};

export default EpisodeArtisteCards;