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

