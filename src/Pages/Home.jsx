import Footer from '../Components/Footer';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import HomeComponent from '../Components/HomeComponent/HomeComponent';
import { useDispatch } from 'react-redux';
import { fetchProgramme } from '../../redux/reducers/prgrammeReducers';
import { useEffect } from 'react';
import { fetchArticles } from '../../redux/reducers/ArticlesReducers';
import { fetchArtistes } from '../../redux/reducers/ArtistesReducers';
import { fetchBillets } from '../../redux/reducers/BilletsReducers';
import { fetchEpisodes } from '../../redux/reducers/EpisodesReducers';
import { fetchFaqs } from '../../redux/reducers/FaqReducers';
import { fetchLieux } from '../../redux/reducers/LieuxReducers';
import { fetchSponsors } from '../../redux/reducers/SponsorsReducers';

const Home = () => {

	//on recupère les donnés du fetch
	const view = useLoaderData()

    //On récupère toute les données avec redux
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProgramme())
        dispatch(fetchArticles())
        dispatch(fetchArtistes())
        dispatch(fetchBillets())
        dispatch(fetchEpisodes())
        dispatch(fetchFaqs())
        dispatch(fetchLieux())
        dispatch(fetchSponsors())
    },[dispatch])

    return (
        <div className='backgroundColor'> 
			<Navigation/>
            <HomeComponent view={view}/>
            <Footer/>
        </div>
    );
};

export default Home;