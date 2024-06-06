import React from 'react';

const ProgrammeUl = ({allMapScenes, sceneFilter, setSceneFilter, artisteNames, artisteFiltre, setArtisteFiltre}) => {
    return (
        <div className=''>
            <button type="button" className="btn dropdown-toggle text-white btnFiltre" data-bs-toggle="dropdown" aria-expanded="false">
                {sceneFilter ?
                sceneFilter
                :
                'Scene'
                }
                
            </button>
            <ul className="dropdown-menu ">
                {allMapScenes && 
                    allMapScenes.map((scene, index)=>{
                        return(
                            <li key={index} ><button className="dropdown-item" type="button" onClick={()=>setSceneFilter(scene)}>{scene}</button></li>
                        )
                    })    
                }
                {sceneFilter &&
                    <li><button className="dropdown-item" type="button" onClick={()=>setSceneFilter(null)}>Réinitialiser</button></li>
                }
            </ul>
            <button type="button" className="btn dropdown-toggle text-white btnFiltre" data-bs-toggle="dropdown" aria-expanded="false">
                {artisteFiltre ?
                artisteFiltre
                :
                'Artiste'
                }
            </button>
            <ul className="dropdown-menu ">
                {artisteNames && 
                    artisteNames.map((artiste, index)=>{
                        return(
                            <li key={index} ><button className="dropdown-item" type="button" onClick={()=>setArtisteFiltre(artiste)}>{artiste}</button></li>
                        )
                    })    
                }
                {artisteFiltre &&
                    <li><button className="dropdown-item" type="button" onClick={()=>setArtisteFiltre(null)}>Réinitialiser</button></li>
                }
            </ul>
        </div>
    );
};

export default ProgrammeUl;