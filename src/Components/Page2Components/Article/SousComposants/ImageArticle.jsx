import React, { useState } from 'react'
import { imageArticleDiapo, useModal } from '../../../../Assets/Variables/Variable'
import ModalImage from '../../../SubComponent/ModalImage'

function ImageArticle({img}) {

////////////////////////////////////////////////Fonction pour les modals/////////////////////////////////////////////
    const {
        modal,
        openModal,
        handleCloseModal
    } = useModal()

    return (
        <>
            <div style={{backgroundImage:`url(${imageArticleDiapo.uri}${img.name})`}} className='rounded mx-xl-4 hotelImage' onClick={openModal}>
                <p></p>
            </div>
            <ModalImage show={modal.show} image={img} handleCloseModal={handleCloseModal} source={imageArticleDiapo}/>
        </>
        
    )
}

export default ImageArticle