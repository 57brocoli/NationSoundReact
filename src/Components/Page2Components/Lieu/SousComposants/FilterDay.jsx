import React from 'react'
import ProgrammeArtisteCards from '../../../Page1Components/Programme/SousComposants/ProgrammeArtisteCards';

function FilterDay({data, dayFilter}) {
    console.log(data);
    console.log(dayFilter);
    return (
        <>
           {data
                .filter(episode => episode.day.name == dayFilter)
                .map((episode, index)=>{
                    return(
                        <ProgrammeArtisteCards episode={episode} key={episode.id} index={index}/>
                    )
                }
            )}
        </>
    )
}

export default FilterDay