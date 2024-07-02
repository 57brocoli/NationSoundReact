import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import SectionHeroComposant from './SectionHeroComposant';

function PageHeroComposant({id}) {
    const [page, setPage] = useState([])
    useEffect(()=>{
        axios.get(`https://pixelfull.pixelevent.site/api/pages/${id}`)
        .then(res=>setPage(res.data))
    },[id])

    const [filtreActive, setFiltreActive] = useState()
    return (
        <div className='pageCard'>
            {page &&
            <div>
                <h3>Titre de la page : {page.name}</h3>
                {page.sections && 
                        <h3>Nombre de section : {page.sections.length}</h3>
                }
            <section className='d-flex justify-content-center'> 
                <div className='btn-group btn-group-lg'>
                    {page.sections && 
                        page.sections.map((section)=>{
                            return(
                                <button key={section.id} className='btn btn-outline-light' onClick={()=>setFiltreActive(section.id)}>
                                    {section.title}
                                </button>
                            )
                    })}
                </div>  
            </section>

            <AnimatePresence mode="wait">
                <motion.div
                key={filtreActive ? filtreActive : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                >
                {filtreActive && <SectionHeroComposant id={filtreActive}/>}
                </motion.div>
            </AnimatePresence>
            </div>
            }
            
        </div>
    )
}

export default PageHeroComposant