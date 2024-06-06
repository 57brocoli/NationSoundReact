import React from 'react';
import ProgrammeArtisteCards from './ProgrammeArtisteCards';
import moment from 'moment';

function EpisodeListe({ scene, episodes, artisteFiltre }) {
    // Fonction pour filtrer et trier les épisodes
    const filterAndSortEpisodes = (episodes) => {
        return episodes
        //On filtre par scène
        .filter(episode => episode.lieu.name === scene)
        //On filtre par artiste
        .filter(episode => artisteFiltre ? episode.artiste.name === artisteFiltre : true)
        //On ordonne par date
        .sort((a, b) => moment(a.hour).toDate() - moment(b.hour).toDate());
    };

    // Obtenir les épisodes filtrés et triés
    const episodesOrdoner = filterAndSortEpisodes(episodes);

    return (
        <div className='d-flex justify-content-between scrollx'>
            {episodesOrdoner.map(episode => (
                <ProgrammeArtisteCards episode={episode} key={episode.id} />
            ))}
        </div>
    );
}

export default EpisodeListe;