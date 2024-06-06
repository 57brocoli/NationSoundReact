import React, { useEffect, useState } from 'react';
import { imageLieu } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import {fetchLieux} from './../../../../redux/reducers/LieuxReducers'
import { NavLink } from 'react-router-dom';
import DayComposant from './SousComposants/DayComposant';

const LieuComponent = ({id}) => {

    const dispatch = useDispatch()
    const lieus = useSelector(state => state.lieux.lieux)
    
    useEffect(()=>{
       dispatch(fetchLieux())
    },[dispatch])

    let lieu = []
    let days = []
    let episodes = []
    if (lieus) {
        //Onrécupère la scene
        lieu = lieus.find(lieu=>lieu.id == id)
        if (lieu) {
            //On récupère les episodes
            episodes = lieu.episodes
            if (episodes) {
                //On récupère les journées
                const allDays = episodes.map(episode => episode.day.name)
                // on élimine les doublons
                days = allDays.filter((x, i) => allDays.indexOf(x) === i);
            }
        }
    }
    const[showProgramme, setShowProgramme] = useState(false)
    
    return (
        <div>
            {lieu &&
                <section >
                    <article className='container-xl pt-xl-3 text-white'>
                        <div style={{backgroundImage:`url(${imageLieu.uri}${lieu.featuredImage})`}} className='centerImageArtiste col-xl-4 float-xl-start mb-sm-2 me-sm-4 '>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h2 className='fs-1 mt-3'>{lieu.name}</h2>
                            <div className='d-flex align-items-end'>
                                <p>liste des reseau sociaux</p>
                            </div>
                        </div>
                        <hr className='mt-2'/>
                        <p className='mb-0'>
                            {lieu.description}
                        </p>
                        {lieu.links[0] && 
                            <NavLink className='btn btn-success my-3' to={`${lieu.links[0].link}`} target='blank'>Visiter le site</NavLink>
                        }
                    </article>
                    {lieu.category === 'Scene' &&
                    <section className='container'>
                        <button className='btn btn-outline-light container mt-4' onClick={()=>setShowProgramme(!showProgramme)}>Voir le programme de la scene</button>
                        <div >
                        {showProgramme &&
                            days.map((day,index)=>{
                                return(
                                    <DayComposant key={index} day={day} episodes={episodes}/>
                                )
                            })
                        }
                        </div>
                    </section>
                    }
                </section>
            }
        </div>
    );
};

export default LieuComponent;