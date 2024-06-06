import React, { useEffect, useState } from 'react';
import { figure } from '../../../Assets/Variables/Variable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgramme } from '../../../../redux/reducers/prgrammeReducers';
import Journée from './SousComposants/Journée';

const ProgrammeConponent = ({view, state}) => {

    //recupération du programme
    const dispatch = useDispatch()
    const programme = useSelector(state => state.programme.programme)
    useEffect(()=>{
        dispatch(fetchProgramme())
    },[dispatch])

    // Si l'on reussit à avoir le programme
    if (programme) {
        //on récupère les jours de l'évenement
        var days = programme.map(day => day.name)
    }

    // filtre pour les journées
    const[dayFilter, setDayFilter] = useState(null)

    //fonction pour filtrer les journée
    const filterProgramme = (programme) => {
        return programme
            .filter(day => dayFilter ? day.name === dayFilter : true)
    }
    
    // Tableau des journée filtrer
    const programmeFiltrer = filterProgramme(programme)

    return (
        <>
            <header style={{backgroundImage:`url(${figure.uri}${view.headerImage.name})`}} className='centerImage'>
                <h1 className='text-center titlePage'>{view.name}</h1>
            </header>
            <main className='text-white container'>
                {state === 'loading' && 
                    <div className="spinner-border text-primary mx-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                <h5 className='py-4 text-center '>{view.headerText}</h5>
                <h2 className='text-center'>Nation Sound</h2>
                <section className='d-flex justify-content-center pt-2 '>
                    <div className="btn-group " role="group" aria-label="Basic radio toggle button group">
                        {dayFilter != null &&
                        <div className='btn-group'>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={()=>setDayFilter(null)}/>
                            <label className="btn btn-outline-light" htmlFor="btnradio1">Voir tous</label>
                        </div>
                        }
                        {days &&
                            days.map((day, index)=>{
                                return(
                                    <div key={index} className='btn-group' onClick={()=>setDayFilter(day)}>
                                        <input type="radio" className="btn-check" name="btnradio" id={day} autoComplete="off"/>
                                        <label className="btn btn-outline-light" htmlFor={day}>{day}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className='mt-4'>
                    {programmeFiltrer.map(day => {
                        return(
                            <Journée day={day} key={day.id}/>
                        )
                    })}
                </section>
            </main>
        </>
    );
};

export default ProgrammeConponent;