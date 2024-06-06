import React from 'react'
import ProgrammeArtisteCards from '../../../Page1Components/Programme/SousComposants/ProgrammeArtisteCards'
import moment from 'moment';

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
            <h4 className='text-white'>{day}</h4>
            <div className='d-flex scrollx'>
            {episodesOrdoner
                .filter(episode => episode.day.name == day)
                .map(episode=>{
                    return(
                        <ProgrammeArtisteCards episode={episode} key={episode.id}/>
                    )
                }
            )}
            </div>
        </section>
    )
}

export default DayComposant