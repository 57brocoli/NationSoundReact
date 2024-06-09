import React from 'react'
import Navigation from '../Components/Navigation'
import LoginForm from './../Components/Formulaires/LoginForm'
import { useDimention } from '../Assets/Variables/Variable'
import Footer from '../Components/Footer'

function Login() {
    const h = useDimention()
    const height = h.height-45-8-8-190
    return (
        <div className='backgroundColor'>
            <div style={{minHeight: height}}>
                <Navigation/>
                <header className='HeaderContainerLogin'>
                    {/* <img src={logo} alt="logo" className='logoLogin' /> */}
                    <h1 className='text-center titlePage'>Login</h1>
                </header>
                {/* <hr /> */}
                <LoginForm redirection={true}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Login