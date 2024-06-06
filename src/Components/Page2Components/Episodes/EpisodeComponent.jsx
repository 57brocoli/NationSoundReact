import moment from 'moment';
import { useEffect, useState } from 'react';
import EpisodeArtisteCards from '../Artiste/SousComposants/EpisodeArtisteCards';
import { Link } from 'react-router-dom';
import { imageArtiste } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../../../../redux/reducers/EpisodesReducers';


const EpisodeComponent = ({id}) => {
    
    //On recupère les épisodes du redux
    const episodes = useSelector(state => state.episodes.episodes)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchEpisodes())
    },[dispatch])

    //On filtre grace a l'id pour ne récupérer que l'épisode qui nous intéresse
    const episode = episodes.find(episode => episode.id === Number(id))
    
    //On récupère l'id de l'artiste
    if (episode) {
        var artisteId= episode.artiste.id
    }
    // Puis on récupère tous les épisodes que l'artiste anime
    const otherArtisteEpisode = episodes.filter(episode => episode.artiste.id === artisteId)

    const [showOtherEpisode, setShowOtherEpisode] = useState(false)

    return (
        <div className=' text-white'>
            {episode &&
                <section>
                    <article className='container-xl pt-xl-3'>
                        <div style={{backgroundImage:`url(${imageArtiste.uri}${episode.artiste.featuredImage})`}} className='centerImageArtiste col-xl-4 float-xl-start mb-sm-2 me-sm-4 '>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h2 className='fs-1 mt-3'>{episode.artiste.name}</h2>
                            <div className='d-flex align-items-end'>
                                <p>liste des reseau sociaux</p>
                            </div>
                        </div>
                        <hr className='mt-2'/>
                        <div className='d-flex justify-content-between my-3'>
                            <div>
                                <h5>Heure : {moment(episode.hour).format('H.mm')}</h5>
                                <h5>Scene : {episode.lieu.name}</h5>
                            </div>
                            <Link to={episode.artiste.musicLink} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>Ecouter un extrait</Link>
                        </div>
                        <p className=' mb-0'>
                            {episode.artiste.description}
                        </p>
                    </article>
                    <section className='container'>
                        <button className='btn btn-outline-light container mt-4' onClick={()=>{setShowOtherEpisode(!showOtherEpisode)}}>Voir les autres passage sur scene</button>
                        {showOtherEpisode && 
                            otherArtisteEpisode && 
                                <div className='d-flex pt-3 scrollx'>
                                    {otherArtisteEpisode.map((otherEpisode, index)=>{
                                        return(
                                            <div key={index}>
                                                <EpisodeArtisteCards episode={otherEpisode}/>
                                            </div>
                                        )
                                    })}
                                </div>
                        }
                    </section>
                </section>
            }
        </div>
    );
};

export default EpisodeComponent;