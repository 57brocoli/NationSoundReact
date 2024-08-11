import React from 'react'
import moment from 'moment';
import FilterDay from './FilterDay';
import ScrollBox from '../../../SubComponent/ScrollBox';

function DayComposant({day, episodes}) {

    //On fait une copie des épisodes
    const episodeArray = [...episodes]
    //Fonction qui ordone les episodes par ordre chronologique
    const ordonedEpisodes = (episodes) => {
        return episodes
        .sort((a, b) => moment(a.hour).toDate() - moment(b.hour).toDate());
    }
    //Les épisode classé par chronologiquement
    const episodesOrdoner = ordonedEpisodes(episodeArray)

    return (
        <section className='my-3'>
            <h4 className='text-white text-center'>{day}</h4>
            <ScrollBox data={episodesOrdoner} box={FilterDay} dayFilter={day} styles={"ContainerlisteArtiste"}/>
        </section>
    )
}

export default DayComposant