import React, { useState } from 'react'
import { figure, useModal } from '../../../../Assets/Variables/Variable'
import ModalImage from '../../../SubComponent/ModalImage';
import { AnimatePresence, motion } from 'framer-motion';

function Image({image, index}) {
//////////////////////////////////////////////Fonction pour les modals///////////////////////////////////////////
    const {
        modal,
        openModal,
        handleCloseModal
    } = useModal()
    return (
        <>
            <AnimatePresence >
                <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3}}
                >
                    <div style={{backgroundImage:`url(${figure.uri}${image.name})`}} className='carrouselImage centerImage rounded m-lg-1 image' onClick={openModal}></div>
                </motion.div>
            </AnimatePresence>
            <ModalImage show={modal.show} handleCloseModal={handleCloseModal} image={image} source={figure}/>
        </>
    )
}

export default Image