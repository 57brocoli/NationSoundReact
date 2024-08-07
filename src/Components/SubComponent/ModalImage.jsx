import React, { useState } from 'react'
import { figure } from '../../Assets/Variables/Variable'
import {AnimatePresence, motion} from 'framer-motion'

function ModalImage({show, handleCloseModal, image}) {
    return (
        <AnimatePresence>
            {show && (
                <div className='modalImageShow' tabIndex="-1">
                    <motion.div
                        className='modalBackdrop'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                        onClick={handleCloseModal}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        style={{ backgroundImage: `url(${figure.uri}${image.name})`}}
                        className='modalImageContainer'
                    >
                        <img
                            src={`${figure.uri}${image.name}`}
                            alt="Modal Content"
                            className='imageShow'
                        />
                        {/* <p onClick={handleCloseModal} className='closeImage'>&times;</p> */}
                    </motion.div>
                    
                </div>
            )}
        </AnimatePresence>
    )
}

export default ModalImage