import React from 'react'
import { imgBillet } from '../../../../Assets/Variables/Variable'
import {motion} from 'framer-motion'

function Billet({billet, index}) {

    const redirect = () =>{
        alert('Vous allez être rediriger vers le site de la billetterie')
    }

    const pair = index % 2 === 0

    return (
        <motion.div 
        initial={{ x: pair ? 100 : -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2}} 
        >
            <div className='billet'>
                <article style={{backgroundImage:`url(${imgBillet.uri}${billet.featuredImage})`}} className='imgBillet centerImage rounded' onClick={redirect}>
                    <h2 className='p-3'>{billet.name}</h2>
                    <p className='px-3'>{billet.description}</p>
                    <p className='p-3'>Prix : {billet.price} &euro;</p>
                </article>
            </div>
        </motion.div>
    )
}

export default Billet