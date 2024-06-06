import React, {useEffect, useState} from 'react';
import Navigation from '../Components/Navigation';
import BilletterieComponent from '../Components/Page1Components/Billets/BilletterieComponent';
import AboutComponent from '../Components/Page1Components/Apropos/AboutComponent';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Footer from '../Components/Footer';
import ProgrammeConponent from '../Components/Page1Components/Programme/ProgrammeConponent';
import SponsorComponent from '../Components/Page1Components/Sponsors/SponsorComponent';
import MapComponent from '../Components/Page1Components/Carte/MapComponent';
import ArtisteComponent from '../Components/Page1Components/Artistes/ArtisteComponent';
import ActualiteComponent from '../Components/Page1Components/Actualites/ActualiteComponent';
import { useDimention } from '../Assets/Variables/Variable';

const Page1 = ({billetterie, about, programme, artiste, actualite, sponsor, map}) => {

    //On récuprer les données provenant de la route
    const view = useLoaderData()

    //on recupère la propriété state du fetch
	const {state} = useNavigation()

    // fonction pour avoir les dimention de l"ecran
    const h = useDimention()
    const height = h.height-45-8-8-190    

    return (
        <div className='backgroundColor'>
            <div style={{minHeight:height}}>
                <Navigation/>
                {billetterie && <BilletterieComponent view={view}/>}
                {about && <AboutComponent view={view}/>}
                {programme && <ProgrammeConponent view={view} state={state}/>}
                {artiste && <ArtisteComponent state={state}/>}
                {sponsor && <SponsorComponent view={view} state={state}/>}
                {actualite && <ActualiteComponent view={view} state={state}/>}
                {map && <MapComponent screenSize={h}/>}
            </div>
            <Footer/>
        </div>
    );
};

export default Page1;