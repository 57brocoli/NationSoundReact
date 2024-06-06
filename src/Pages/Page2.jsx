import Navigation from '../Components/Navigation';
import {useParams} from 'react-router-dom'
import Footer from '../Components/Footer';
import EpisodeComponent from '../Components/Page2Components/Episodes/EpisodeComponent';
import LieuComponent from '../Components/Page2Components/Lieu/LieuComponent';
import ArtisteDetails from '../Components/Page2Components/Artiste/ArtisteDetails';
import { useDimention } from '../Assets/Variables/Variable';
import ArticleComponent from '../Components/Page2Components/Article/ArticleComponent';

const Page2 = ({artiste, article, episode, lieu}) => {
    
    let { id } = useParams();

    const h = useDimention()
    const height = h.height-45-8-8-240
    
console.log();
    return (
        <div className='doc backgroundColor' >
            <div style={{minHeight:height}}>
                <Navigation/>
                {artiste && <ArtisteDetails id={id}/>}
                {article && <ArticleComponent id={id}/>}
                {episode && <EpisodeComponent id={id}/>}
                {lieu && <LieuComponent id={id}/>}
            </div>
            <Footer/>
        </div>
    );
};

export default Page2;