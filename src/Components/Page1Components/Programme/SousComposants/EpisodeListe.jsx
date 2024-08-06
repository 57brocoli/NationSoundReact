import React, { useEffect, useRef, useState } from 'react';
import ProgrammeArtisteCards from './ProgrammeArtisteCards';
import moment from 'moment';

function EpisodeListe({ scene, episodes, artisteFiltre }) {
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

    //Fonction pour scroller vers la droite et la gauche
    const containerRef = useRef(null)
    const next = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 170,
                behavior: 'smooth'
            });
        }
    }
    const prev = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -170,
                behavior: 'smooth'
            });
        }
    }

    //Fonction pour avoir la largeur du contenaire de la liste des episodes
    function useDimentionContainer() {
        const [size, setSize] = useState(getCurrentDimension());
        function getCurrentDimension(){
          return {
            width: containerRef.current && containerRef.current.offsetWidth,
          }
        }
        useEffect(() => {
              const updateDimension = () => {
                    setSize(getCurrentDimension())
              }
              window.addEventListener('resize', updateDimension);
              return(() => {
                  window.removeEventListener('resize', updateDimension);
              })
        }, [size])
        return size
    }
    const containerlisteArtiste = useDimentionContainer()

    //Fonction pour avoir la largeur de la liste des épisodes
    const listeRef = useRef(null)
    function useDimentionListe() {
        const [size, setSize] = useState(getCurrentDimension());
        function getCurrentDimension(){
          return {
            width: listeRef.current && listeRef.current.offsetWidth,
          }
        }
        useEffect(() => {
              const updateDimension = () => {
                    setSize(getCurrentDimension())
              }
              window.addEventListener('resize', updateDimension);
              return(() => {
                  window.removeEventListener('resize', updateDimension);
              })
        }, [size])
        return size
    }
    const listeArtiste = useDimentionListe()

    useEffect(() => {
        useDimentionContainer
        useDimentionListe
    }, [])

    return (
        <section className='listContainer'>
            <div onClick={prev} className='ContainerBtnProgListe'>
                {containerlisteArtiste.width < listeArtiste.width && 
                <p className='btnProgListe prevProg'>&larr;</p>
                }
            </div>
            <div className='ContainerlisteArtiste scrollx' ref={containerRef}>
                <div className='listeArtiste' ref={listeRef}>
                    {episodesOrdoner.map((episode, index) => (
                        <ProgrammeArtisteCards episode={episode} key={episode.id} index={index}/>
                    ))}
                </div>
            </div>
            <div onClick={next} className='ContainerBtnProgListe'>
                {containerlisteArtiste.width < listeArtiste.width && 
                <p className='btnProgListe nextProg'>&rarr;</p>
                }
            </div>
        </section>
        
    );
}

export default EpisodeListe;