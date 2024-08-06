import moment from 'moment';
import React, { useEffect, useState } from 'react'
import ProgrammeUl from './ProgrammeUl';
import EpisodeListe from './EpisodeListe';

function Journée({day}) {

    let episodes = [];
    let artistes = [];
    let scenes = [];
    if (day) {
        episodes = day.episode;
        //On récupère les artistes
        const artistesAll = episodes.map(a => a.artiste.name);
        //On supprime les doublons
        artistes = artistesAll.filter((x, i) => artistesAll.indexOf(x) === i);
        //On récupére les scènes
        const allScenes = episodes.map(o => o.lieu.name);
        //Puis on supprime les doublons
        scenes = allScenes.filter((x, i) => allScenes.indexOf(x) === i);
    }

    // Filtre pour les scene et artiste
    const [sceneFilter, setSceneFilter] = useState(null);
    const [artisteFiltre, setArtisteFiltre] = useState(null);

    //Fonction pour filtrer les scenes
    const filtreScene = (scenes) => {
        return scenes
            .filter(scene => sceneFilter? scene === sceneFilter : true)
    }
    // Tableau des scenes filtrer
    const sceneFiltrer = filtreScene(scenes)

    return (
        <>
            {day &&
                <section className={`cardProgramme mb-4 backgroundColorBox`}>
                    <div className={`pb-1 pt-2 px-2 ps-lg-3 mb-3 d-flex justify-content-between justify-content-lg-between rounded-top ${day.name === "Journée 1" && "journe1"} ${day.name === "Journée 2" && "journe2"} ${day.name === "Journée 3" && "journe3"}`}>
                        <h2 className=''>{day.name}</h2>
                        <p className='h5 mt-2 d-none d-lg-block'>{moment(day.date).format('D MMMM YYYY')}</p>
                        <ProgrammeUl allMapScenes={scenes} sceneFilter={sceneFilter} setSceneFilter={setSceneFilter} artisteNames={artistes} artisteFiltre={artisteFiltre} setArtisteFiltre={setArtisteFiltre}/>
                    </div>
                    {/* si le filtre des scenes est null */}
                    {sceneFiltrer.map((scene, index)=>{
                        return(
                            <div key={index} className='px-4 pb-3 '>
                                <h4 className='text-center'>{scene}</h4>
                                <EpisodeListe episodes={episodes} day={day} scene={scene} artisteFiltre={artisteFiltre}/>
                            </div>
                        )
                    })}
                </section>
            }
        </>
    )
}

export default Journée