import React from 'react'
import Navigation from '../../Components/Navigation'
import Footer from '../../Components/Footer'
import HeroComposant from '../../Components/Hero/HeroComposant'
import { useDimention } from '../../Assets/Variables/Variable'

function Hero() {
    // fonction pour avoir les dimention de l"ecran
    const h = useDimention()
    const height = h.height  

    return (
        <div className='backgroundColor'>
            <div style={{minHeight:height}}>
                <Navigation/>
                <HeroComposant/>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Hero