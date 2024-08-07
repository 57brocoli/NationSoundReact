import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLieux } from '../../../redux/reducers/LieuxReducers';
import { figure, useDimention} from '../../Assets/Variables/Variable';
import ImageProgramme from './SousComposants/ImageProgramme';
import CarouselHotel from './SousComposants/CarouselHotel';
import ScrollBox from '../SubComponent/ScrollBox';
import FilterHotel from './SousComposants/FilterHotel';

const HomeComponent = ({view}) => {

    //Fonction pour récupérer la hauteur de l'ecran
    const h = useDimention()
    const height = h.height-57-175-59-400

    //fonction pour recupéré les hotels
    const dispatch = useDispatch()
    const lieux = useSelector(state => state.lieux.lieux)
    const user = useSelector(state => state.user.user); // Accéder à l'état de l'utilisateur
    const token = useSelector(state => state.user.token); // Accéder au token de l'utilisateur
    if (lieux) {
        var hotels = lieux.filter(lieux => lieux.category === 'Hotel')
    }
    useEffect(()=>{
        dispatch(fetchLieux());
    },[dispatch])

    return (
        <div>
            {view.headerImage &&
                <header style={{backgroundImage:`url(${figure.uri}${view.headerImage.name})`}} className='centerImage'>
                    <h1 className='text-center titlePage'>NationSound</h1>
                </header>    
            }
            <main className='text-center' style={{minHeight: height}}>
                <h5 className='text-center text-white container py-4'>{view.headerText}</h5>
                {view && 
                    view.pageSections.map((section, index)=>{
                        return(
                            <article key={index} className='py-2 text-white'>
                                {section.display === 'style1' &&
                                    <div>
                                        <h2 className='text-center h1 fw-bold'>{section.title}</h2>
                                        <p className='text-center container'>{section.content}</p>
                                        {section.images[0] &&
                                            <div key={index} style={{backgroundImage:`url(${figure.uri}${section.images[0].name})`}} className='container centerImage rounded'></div>
                                        }
                                    </div>
                                }
                                {section.display === 'style2' &&
                                    <div key={index} style={{backgroundImage:`url(${figure.uri}${section.images[0].name})`}} className='centerImage rounded d-flex flex-column justify-content-evenly'>
                                        <h2 className='text-center h1 fw-bold '>{section.title}</h2>
                                        <p className='text-center container '>{section.content}</p>
                                        <div>
                                            {section.title === 'Explorez le site' && <NavLink className='btn btn-primary m-3' to='/map'>Carte</NavLink>}
                                        </div>
                                    </div>
                                }
                                {section.display === 'style3' &&
                                    <div>
                                        <h2 className='text-center h1 fw-bold'>{section.title}</h2>
                                        <p className='text-center container'>{section.content}</p>
                                        <div className='container d-lg-flex'>
                                            {section.images && 
                                                section.images.map((img, index)=>{
                                                    return(
                                                        <ImageProgramme key={index} img={img} index={index}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                                {section.title === 'Hôtel' &&
                                    <div className='container p-0'>
                                        <ScrollBox box={FilterHotel} data={hotels}/>
                                    </div>
                                }
                                <div className='mx-auto'>
                                    {section.title === 'Programme' && <NavLink className='btn btn-primary m-3' to='/programme'>Programme</NavLink>}
                                    {section.title === 'Nos remerciements' && <NavLink className='btn btn-primary m-3' to='/sponsor'>Sponsor</NavLink>}
                                </div>
                            </article>
                        )
                    })
                }
            </main>
        </div>
        
    );
};
export default HomeComponent;