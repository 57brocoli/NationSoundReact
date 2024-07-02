import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import PageHeroComposant from './PageHeroComposant'

function HeroComposant() {
    const [pages, setPages] = useState([])
    useEffect(()=>{
        axios.get('https://pixelfull.pixelevent.site/api/pages')
        .then(res=>setPages(res.data["hydra:member"]))
    },[])

    const [filtreActive, setFiltreActive] = useState()
    // console.log(filtreActive);
    
    return (
        <div className='mainHero container d-flex flex-column'>
            <h1 className='text-center titlePage'>Hero</h1>
            <section className='my-5'>
                <h3 className='text-white text-center'>Vous avez {pages.length} page{pages.length > 1 && 's'} créée{pages.length > 1 && 's'} dans la base de donnée</h3>
            </section>

            <section className='d-flex justify-content-center'> 
                <div className='btn-group btn-group-lg'>
                    {pages && 
                        pages.map((page)=>{
                            return(
                                <button key={page.id} className='btn btn-outline-light' onClick={()=>setFiltreActive(page.id)}>
                                    {page.name}
                                </button>
                            )
                    })}
                </div>  
            </section>

            <AnimatePresence mode="wait">
                <motion.div
                key={filtreActive ? filtreActive : "empty"}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                >
                {filtreActive && <PageHeroComposant id={filtreActive} setFiltreActive={setFiltreActive}/>}
                </motion.div>
            </AnimatePresence>
            
        </div>
    )
}

export default HeroComposant