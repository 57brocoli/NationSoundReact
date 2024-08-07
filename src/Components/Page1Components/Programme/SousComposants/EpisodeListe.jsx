import moment from 'moment';
import ScrollBox from '../../../SubComponent/ScrollBox';
import FilterProgramme from './FilterProgramme';

function EpisodeListe({ scene, episodes, artisteFiltre }) {

///////////////////////////////////////////Fonction pour le contenu du programme/////////////////////////////////////
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
        <>
            <ScrollBox data={episodesOrdoner} box={FilterProgramme} styles={"ContainerlisteArtiste"}/>
        </>
    );
}

export default EpisodeListe;