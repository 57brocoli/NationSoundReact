import React, { useState } from 'react'
import ModalProgramme from '../../SubComponent/ModalProgramme'
import { figure, useModal } from '../../../Assets/Variables/Variable'

function ImageProgramme({img, index}) {

    const [show, setShow] = useState(false)

    //Importation des fonctions pour les modals depuis Assets/Variables/variables.jsx
    const {
        modal,
        openModal,
        handleCloseModal,
    } = useModal()

    //Fonction pour fermer la modal
    const openModalImage = () => {
        openModal()
        setShow(true)
    };

    //Fonction pour fermer la modal
    const closeModal = () => {
        handleCloseModal()
        setShow(false)
    };

    return (
        <div className='container p-0 my-3 my-xl-0 d-flex justify-content-center'>
            <div key={index} style={{backgroundImage:`url(${figure.uri}${img.name})`}} className='carrouselImage centerImage rounded' onClick={openModalImage}></div>
                {show &&
                    <ModalProgramme show={modal.show} handleCloseModal={closeModal} index={index}/>
                }
        </div>
    )
}

export default ImageProgramme