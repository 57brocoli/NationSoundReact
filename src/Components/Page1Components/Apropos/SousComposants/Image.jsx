import React, { useState } from 'react'
import { figure } from '../../../../Assets/Variables/Variable'
import ModalImage from '../../../SubComponent/ModalImage';
import { AnimatePresence, motion } from 'framer-motion';

function Image({image, index}) {
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
            <AnimatePresence >
                <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3}}
                >
                    <div style={{backgroundImage:`url(${figure.uri}${image.name})`}} className='carrouselImage centerImage rounded m-lg-1 image' onClick={openModalImage}></div>
                </motion.div>
            </AnimatePresence>
            <ModalImage show={modal.show} handleCloseModal={handleCloseModal} image={image}/>
        </>
    )
}

export default Image