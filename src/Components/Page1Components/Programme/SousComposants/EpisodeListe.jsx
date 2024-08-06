import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProgrammeArtisteCards from './ProgrammeArtisteCards';
import moment from 'moment';

function EpisodeListe({ scene, episodes, artisteFiltre }) {

    ///////////////////////////////////////////Fonction pour le contenu du programme/////////////////////////////////////

    // Fonction pour filtrer et trier les épisodes
    const filterAndSortEpisodes = (episodes) => {
        return episodes
        //On filtre par scène
        .filter(episode => episode.lieu.name === scene)
        //On filtre par artiste
        .filter(episode => artisteFiltre ? episode.artiste.name === artisteFiltre : true)
        //On ordonne par date
        .sort((a, b) => moment(a.hour).toDate() - moment(b.hour).toDate());
    };

    // Obtenir les épisodes filtrés et triés
    const episodesOrdoner = filterAndSortEpisodes(episodes);

    ////////////////////////////////////////Fonction pour les fonctionnalité de la page/////////////////////////////////////
    
    // Références pour le conteneur et la liste
    const containerRef = useRef(null);

    // Fonction pour faire défiler vers la droite
    const scrollRight = useCallback(() => {
        if (containerRef.current) {
        containerRef.current.scrollBy({
            left: 170,
            behavior: 'smooth'
        });
        }
    }, []);

    // Fonction pour faire défiler vers la gauche
    const scrollLeft = useCallback(() => {
        if (containerRef.current) {
        containerRef.current.scrollBy({
            left: -170,
            behavior: 'smooth'
        });
        }
    }, []);

    // Fonction pour démarrer le défilement continu
    const [intervalId, setIntervalId] = useState(null);

    // Fonction pour faire défiler en continuer à droite
    const startScrollingRight = useCallback(() => {
        if (intervalId) clearInterval(intervalId);
        const id = setInterval(scrollRight, 170); 
        setIntervalId(id);
    }, [intervalId, scrollRight]);

    // Fonction pour faire défiler en continuer à gauche
    const startScrollingLeft = useCallback(() => {
        if (intervalId) clearInterval(intervalId);
        const id = setInterval(scrollLeft, 170); 
        setIntervalId(id);
    }, [intervalId, scrollLeft]);

    // Fonction pour stoper le défilement en continu
    const stopScrolling = useCallback(() => {
        if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        }
    }, [intervalId]);

    return (
        <section className='listContainer'>
            <div className='ContainerBtnProgListe'>
                {/* {containerlisteArtiste.width < listeArtiste.width &&  */}
                <p
                onClick={scrollLeft}
                onMouseDown={startScrollingLeft}
                onMouseUp={stopScrolling}
                onMouseLeave={stopScrolling}
                onTouchStart={startScrollingLeft}
                onTouchEnd={stopScrolling} className='btnProgListe prevProg'>
                    &larr;
                </p>
                {/* // } */}
            </div>
            <div className='ContainerlisteArtiste scrollx' ref={containerRef}>
                <div className='listeArtiste'>
                    {episodesOrdoner.map((episode, index) => (
                        <ProgrammeArtisteCards episode={episode} key={episode.id} index={index}/>
                    ))}
                </div>
            </div>
            <div className='ContainerBtnProgListe'>
                {/* {containerlisteArtiste.width < listeArtiste.width &&  */}
                <p
                onClick={scrollRight}
                onMouseDown={startScrollingRight}
                onMouseUp={stopScrolling}
                onMouseLeave={stopScrolling}
                onTouchStart={startScrollingRight}
                onTouchEnd={stopScrolling} className='btnProgListe nextProg'>
                    &rarr;
                </p>
                {/* } */}
            </div>
        </section>
        
    );
}

export default EpisodeListe;