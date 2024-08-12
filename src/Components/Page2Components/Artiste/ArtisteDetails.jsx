import React, { useState } from 'react';
import EpisodeArtisteCards from './SousComposants/EpisodeArtisteCards';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { imageArtiste } from '../../../Assets/Variables/Variable';

const ArtisteDetails = ({id}) => {

    //On recupère les artistes du reducer
    const artistes = useSelector(state => state.artistes.artistes)

    let artiste
    if (artistes) {
        //On récupèree uniquement l'artiste qui à le meme id
        artiste = artistes.find(artiste => artiste.id === Number(id))
    }
    
    const [showOtherEpisode, setShowOtherEpisode] = useState(false)

    return (
        <>
            {artiste && 
                <section className='text-white'>
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
                            {showOtherEpisode && 
                                <div className='d-flex pt-3 scrollx'>
                                {artiste.episodes.map((episode, index)=>{
                                        return(
                                            <div key={index} >
                                                <EpisodeArtisteCards episode={episode}/>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            }
                            </div>
                        }
                    </section>
                </section>
            }
        </>
    );
};

export default ArtisteDetails;