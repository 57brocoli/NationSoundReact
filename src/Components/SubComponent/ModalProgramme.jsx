import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { imageLieu, useScrollFunction } from '../../Assets/Variables/Variable'
import { useSelector } from 'react-redux'
import ProgrammeArtisteCards from '../Page1Components/Programme/SousComposants/ProgrammeArtisteCards'
import ScrollBox from './ScrollBox'
import FilterEpisode from '../HomeComponent/SousComposants/FilterEpisode'

function ModalProgramme({show, handleCloseModal, index}) {

/////////////////////////////////////Fonction pour récupérer le contenu de la page/////////////////////////////////////
    // const dispatch = useDispatch()
    const lieux = useSelector(state => state.lieux.lieux)
    // useEffect(()=>{
    //     dispatch(fetchLieux())
    // },[dispatch])

    //On filtre pour ne recupérer que les scenes
    const scenes = lieux.filter(scene => scene.category === 'Scene')

    //On prend la scene qui est égale à l'index
    const getScene = (scenes, index) => {
        return scenes[index];
    };
    const scene = getScene(scenes, index);

    //On récupère les épisodes
    let episodes = ([])
    if (scene) {
        //on récupère les episodes
        episodes = scene.episodes.map(episode => episode)
    }
    //On récupère les jours
    let days = ([])
    if (episodes) {
        let allDays = ([])
        allDays = episodes
        .map(episode => episode.day.name)
        days = [...new Set(allDays)]
    }

////////////////////////////////////////Fonction pour les fonctionnalité de la page/////////////////////////////////////
    // Importation des fonctions qui provient du fichier Assets/Variables/variables.jsx
    const {
        containerRef,
    } = useScrollFunction();

////////////////////////////////////////////////Fonction pour les filtres/////////////////////////////////////////////
    const [dayFilter, setDayFilter] = useState(null)
    const changeDay = (day) => {
        setDayFilter(day)
        //On efface le scroll effectué
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -10000,
                behavior: 'smooth'
            });}
    }
    // fonction pour cleanUp le filtre lorsque le composant est unmount
    useEffect(()=>{
        return () => {
            setDayFilter(null)
        }
    },[])
    
    return (
        <>
            {show && (
                <div className='modalProgrammeShow' tabIndex="-1">
                    <motion.div
                        className='modalBackdrop'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                        onClick={handleCloseModal}
                    />
                    <motion.div
                        className='modalProgrammeContainer'
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                    >
                        <section className='modalProgramme'>
                            <div style={{backgroundImage:`url(${imageLieu.uri}${scene.featuredImage})`}} className='modalProgrammeImage'></div>
                            <article className='modalProgrammeArticle'>
                                <h2>{scene.name}</h2>
                                <div className='ContainerBtnChoiceGroupe'>
                                    {days &&
                                        days.map((day, index)=>{
                                            return(
                                                <div key={index} className="btnChoiceGroupe" onClick={()=>changeDay(day)}>
                                                    {day}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {dayFilter &&
                                    <>
                                        <ScrollBox data={episodes} box={FilterEpisode} dayFilter={dayFilter}/>
                                    </>
                                }
                            </article>
                            <button onClick={handleCloseModal} className='btnClose mb-3'>Retour</button>
                        </section>
                    </motion.div>
                </div>
            )}
        </>
    )
}

export default ModalProgramme