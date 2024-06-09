import React from 'react'
import RegisterForm from './../Components/Formulaires/RegisterForm'
import Navigation from '../Components/Navigation'
import Footer from './../Components/Footer'
import { useDimention } from '../Assets/Variables/Variable'

function Register() {

    //On récupere la fonction pour avoir la hauteur de l'ecran
    const h = useDimention()
    const height = h.height-45-8-8-190

    return (
        <div className='backgroundColor'>
            <div style={{minHeight:height}}>
            <Navigation/>
            <header className='HeaderContainerLogin'>
                <h1 className='text-center titlePage'>Inscription</h1>
            </header>
            {/* <hr /> */}
            <RegisterForm redirection={true}/>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Register