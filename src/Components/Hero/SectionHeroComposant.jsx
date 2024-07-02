import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function SectionHeroComposant({id}) {

    const [section, setSection] = useState([])
    useEffect(()=>{
        axios.get(`https://pixelfull.pixelevent.site/api/page_sections/${id}`)
        .then(res=>setSection(res.data))
    },[id])

    const source = {
        uri: 'https://pixelfull.pixelevent.site/uploads/page/',
    };


    return (
        <div>
            {section &&
                    <div className='pageCard text-center'>
                        <h3>{section.title}</h3>
                        <p>{section.content}</p>
                        <div className='d-flex justify-content-evenly'>
                        {section.images &&
                            section.images.map((img, index) => {
                                return(
                                    <div key={index} style={{backgroundImage:`url(${source.uri}${img.name})`}} className='carrouselImage centerImage rounded'></div>
                                )
                            })
                        }
                        </div>
                    </div>
                }
        </div>
    )
}

export default SectionHeroComposant