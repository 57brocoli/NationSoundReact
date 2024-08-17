import React, { useEffect, useState } from 'react';
import EpisodeArtisteCards from './SousComposants/EpisodeArtisteCards';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { imageArtiste } from '../../../Assets/Variables/Variable';
import { AnimatePresence, motion } from 'framer-motion';
import { fetchEpisodes } from '../../../../redux/reducers/EpisodesReducers';

const ArtisteDetails = ({id}) => {

    //On recupère les artistes du reducer
    const artistes = useSelector(state => state.artistes.artistes)

    let artiste
    if (artistes) {
        //On récupèree uniquement l'artiste qui à le meme id
        artiste = artistes.find(artiste => artiste.id === Number(id))
    }

    //On recupère les épisodes du reducer
    // const dispatch = useDispatch()
    const Allepisodes = useSelector(state => state.episodes.episodes)
    // useEffect(()=>{
    //     dispatch(fetchEpisodes())
    // },[dispatch])

    let episodes
    let days
    if (Allepisodes) {
        episodes = Allepisodes.filter(episode => episode.artiste.name === artiste.name)
        const alldays = episodes.map(e=>e.day.name)
        days = [...new Set(alldays)]
    }
    const [showOtherEpisode, setShowOtherEpisode] = useState(false)

    return (
        <>
            {artiste && 
                <section className='text-white doc'>
                    <article className='container-xl pt-xl-3'>
                        <div style={{backgroundImage:`url(${imageArtiste.uri}${artiste.featuredImage})`}} className='centerImageArtiste col-xl-4 float-xl-start mb-sm-2 me-sm-4 '>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h2 className='fs-1 mt-3'>{artiste.name}</h2>
                            <div className='d-flex align-items-end'>
                                <p>liste des reseau sociaux</p>
                            </div>
                        </div>
                        <hr className='mt-2'/>
                        {artiste.musicLink &&
                        <button className='btn btn-outline-light'>
                            <Link to={artiste.musicLink} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>Ecouter un extrait</Link>
                        </button>
                        }
                        <p className='mt-3 mb-0'>
                            {artiste.description}
                        </p>
                    </article>
                    <section className='container'>
                        {artiste.episodes.length > 1 &&
                        <div>
                            <button className='btn btn-outline-light container mt-4' onClick={()=>{setShowOtherEpisode(!showOtherEpisode)}}>Voir les autres passage sur scene</button>
                            <AnimatePresence>
                                <motion.div
                                    key={showOtherEpisode}
                                    initial={{ height:0, opacity: 0 }}
                                    animate={{ height:"auto", opacity: 1 }}
                                    exit={{ height:0, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    {showOtherEpisode && 
                                        <div className='my-3'>
                                            {days.map((day,index)=>{
                                                return(
                                                    <div key={index} className='px-3 py-2'>
                                                        <h3>{day}</h3>
                                                        <div className='d-flex flex-wrap justify-content-center justify-content-md-start'>
                                                            {episodes
                                                                .filter(e => e.day.name === day)
                                                                .map((episode, index)=>{
                                                                    console.log(episode);
                                                                    return(
                                                                        <div key={index}>
                                                                            <EpisodeArtisteCards episode={episode}/>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            
                                        </div>
                                    }
                                </motion.div>
                            </AnimatePresence>
                            
                            </div>
                        }
                    </section>
                </section>
            }
        </>
    );
};

export default ArtisteDetails;