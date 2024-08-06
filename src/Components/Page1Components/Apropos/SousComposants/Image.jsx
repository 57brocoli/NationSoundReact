import React, { useState } from 'react'
import { figure } from '../../../../Assets/Variables/Variable'
import ModalImage from '../../../SubComponent/ModalImage';

function Image({image}) {
    //Initialisation des données pour la modal
    const [modal, setModal] = useState({
        show : false,
    })

    //Fonction pour fermer la modal
    const openModalImage = () => {
        setModal({
            ...modal,
            show: true
        });
    };

    //Fonction pour fermer la modal
    const handleCloseModal = () => {
        setModal({
            ...modal,
            show: false
        });
    };

    return (
        <>
            <div style={{backgroundImage:`url(${figure.uri}${image.name})`}} className='carrouselImage centerImage rounded m-lg-1 image' onClick={openModalImage}></div>
            <ModalImage show={modal.show} handleCloseModal={handleCloseModal} image={image}/>
        </>
    )
}

export default Image