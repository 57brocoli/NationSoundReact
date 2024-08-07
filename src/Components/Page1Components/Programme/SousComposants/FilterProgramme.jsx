import React from 'react'
import ProgrammeArtisteCards from './ProgrammeArtisteCards'

function FilterProgramme({data}) {
    return (
        <>
            {data.map((episode, index) => (
                <ProgrammeArtisteCards episode={episode} key={episode.id} index={index}/>
            ))}
        </>
    )
}

export default FilterProgramme