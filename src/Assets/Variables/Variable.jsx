import { useCallback, useEffect, useRef, useState } from "react";

////////////////////////////////////////////Chemin d'acces aux images///////////////////////////////////////
export const imageLieu = {
    uri: 'https://pixelevent.site/assets/uploads/lieu/',
};
export const figure = {
    uri: 'https://pixelevent.site/assets/uploads/figure/',
};
export const imgBillet = {
    uri: 'https://pixelevent.site/assets/uploads/billet/',
};
export const imageArtiste = {
    uri: 'https://pixelevent.site/assets/uploads/artiste/',
};
export const imageArticle = {
    uri: 'https://pixelevent.site/assets/uploads/articles/',  
};
export const imageArticleDiapo = {
    uri : 'https://pixelevent.site/assets/uploads/articles/diapo/'
}
export const imgSponsor = {
    uri: 'https://pixelevent.site/assets/uploads/sponsors/diapo/',
};
export const logoSponsor = {
    uri: 'https://pixelevent.site/assets/uploads/sponsors/',
};

//////////////////////////////////////// Fonction pour avoir les dimension de l'ecran ////////////////////////////////
export function useDimention() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension(){
        return {
                width: window.innerWidth,
                height: window.innerHeight
        }
    }
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return screenSize
}

/////////////////////////////////////////////// Fonction pour les modals ///////////////////////////////////////

export function useModal() {
    //Initialisation des données pour la modal
    const [modal, setModal] = useState({
        show : false,
        title : '',
        body : ''
    })

    //Pour ouvrir la modal
    const openModal = () => {
        setModal({
            ...modal,
            show: true
        });
    };

    //Pour fermer la modal
    const handleCloseModal = () => {
        setModal({
            ...modal,
            show: false
        });
    };

    //Pour le cas ou la connexion a échoué
    const conectFailed = () => {
        setModal({
            ...modal,
            show: true,
            title: "Erreur",
            body: 'Pseudo où/et mot de passe incorrect'
        });
    };

    //Pour le cas ou la creation de compte a échoué
    const registerFailed = () => {
        setModal({
            ...modal,
            show: true,
            title: "Erreur",
            body: 'Une erreur est survenut'
        });
    };

    //Pour le cas ou l'utilisateur vient de crée un compte 
    const fromInsciptionPage = () => {
        setModal({
            ...modal,
            show: true,
            title: 'Inscription réussie',
            body: 'Votre inscription est terminer. Veuillez pouvez vous connecter.'
          });
    }

    return {
        modal,
        setModal,
        openModal,
        handleCloseModal,
        conectFailed,
        registerFailed,
        fromInsciptionPage
    };
} 

/////////////////////////////////////////////// Fonction pour le scroll ///////////////////////////////////////
export const useScrollFunction = () => {
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

    return {
        containerRef,
        scrollRight,
        scrollLeft,
        startScrollingRight,
        startScrollingLeft,
        stopScrolling
    }
}