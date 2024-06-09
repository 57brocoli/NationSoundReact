import { useEffect, useState } from "react";

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
        handleCloseModal,
        conectFailed,
        registerFailed,
        fromInsciptionPage
    };
} 
