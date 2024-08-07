import Footer from '../Components/Footer';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import HomeComponent from '../Components/HomeComponent/HomeComponent';

const Home = () => {

	//on recupère les donnés du fetch
	const view = useLoaderData()

    return (
        <div className='backgroundColor'> 
			<Navigation/>
            <HomeComponent view={view}/>
            <Footer/>
        </div>
    );
};

export default Home;