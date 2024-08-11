import React, { useMemo } from 'react'
import ProgrammeArtisteCards from '../../Page1Components/Programme/SousComposants/ProgrammeArtisteCards'
import moment from 'moment'

function FilterEpisode({data, dayFilter}) {

    //Fonction pour filtrer et ordonner les épisodes
    const filteredAndSortEpisode = (data) => {
        return data
        .filter(episode => episode.day.name === dayFilter)
        .sort((a,b) => moment(a.hour).toDate() - moment(b.hour).toDate())
    }
    const episodes = filteredAndSortEpisode(data)
   
    return (
        <>
            {episodes &&
                episodes
                    .map((episode, index)=>{
                        return(
                            <ProgrammeArtisteCards episode={episode} key={episode.id} index={index}/>
                        )
            })}
        </>
        
    )
}

export default FilterEpisode