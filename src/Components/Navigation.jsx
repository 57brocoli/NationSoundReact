import { NavLink } from 'react-router-dom';
import logo from '/logo.jpg'
import userIcon from './../../public/images/user/userIcon.png'
import burgeur from './../../public/images/user/burger-menu.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout_user } from '../../redux/actions/UserAction';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import { clearUser } from '../../redux/reducers/UserReducers';

const Navigation = () => {
    const user = useSelector(state => state.user.user); // Accéder à l'état de l'utilisateur
    const dispatch = useDispatch()

    //Fonction pour se déconnecter
    const deconexion = () => {
        // dispatch(clearUser()); // Appelle l'action logout pour effacer les informations utilisateur et le token
        dispatch(logout_user())
    };

    const [showPhoneMenu, setShowPhoneMenu] = useState(false)
    function togglePhoneMenu(){
        setShowPhoneMenu(!showPhoneMenu)
    }

    const [authMenu, setAuthMenu] = useState(false)
    function toggleAuthMenu(){
        setAuthMenu(!authMenu)
    }
    const [authPhoneMenu, setAuthPhoneMenu] = useState(false)
    function toggleAuthPhoneMenu(){
        setAuthPhoneMenu(!authPhoneMenu)
    }

    const [showProgMenu, setShowProgMenu] = useState(false);
    function toggleShowProgMenu(){
        setShowProgMenu(!showProgMenu)
    }
    function turnOffShowProgMenu(){
        if (showProgMenu) {
            setShowProgMenu(false)
        }
    }

    return (
        <>
            <nav className='navBar'>
                <NavLink className="home" to='/'>
                    <img src={logo} alt="Logo" width="40" height="40" className="logo"></img>
                    <h1>Nation Sound</h1>
                </NavLink>
                <ul className='menu'>
                    <li className="" onClick={turnOffShowProgMenu}>
                        <NavLink className="" to='/actualite'>Actualité</NavLink>
                    </li>
                    <motion.li
                        initial={false}
                        animate={showProgMenu ? "open" : "closed"}
                        className=""
                    >
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={toggleShowProgMenu}
                            className='btnProg'
                        >
                            <p>Programme</p>
                            <motion.div
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.55 }}
                            >
                                <svg width="15" height="15" viewBox="0 0 20 20">
                                    <path d="M0 7 L 20 7 L 10 16" />
                                </svg>
                            </motion.div>
                        </motion.button>
                        <motion.ul
                            className='progMenu'
                            variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                                }
                            }
                            }}
                            style={{ pointerEvents: showProgMenu ? "auto" : "none" }}
                        >
                            <motion.li onClick={toggleShowProgMenu}><NavLink className="" to='/programme'>Programme</NavLink></motion.li>
                            <motion.li onClick={toggleShowProgMenu}><NavLink className="" to='/artiste'>Artiste</NavLink> </motion.li>
                        </motion.ul>
                    </motion.li>
                    {/* <li className="">
                        <NavLink className="" to='/programme'>Programme</NavLink>
                    </li> */}
                    {/* <li className="">
                        <a className="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Programme
                        </a>
                        <ul className="">
                            <li><NavLink className="" to='/programme'>Programme</NavLink></li>
                            <li><NavLink className="" to='/artiste'>Artiste</NavLink></li>
                        </ul>
                    </li> */}
                    <li className="" onClick={turnOffShowProgMenu}>
                        <NavLink className="" to='/billetterie' >Billetterie</NavLink>
                    </li>
                    <li className="" onClick={turnOffShowProgMenu}>
                        <NavLink className="" to='/sponsor'>Sponsors</NavLink>
                    </li>
                    <li className="" onClick={turnOffShowProgMenu}>
                        <NavLink className="" to='/about'>A-propos</NavLink>
                    </li>
                    <li className="" onClick={turnOffShowProgMenu}>
                        <NavLink className="" to='/map'>map</NavLink>
                    </li>
                </ul>
                <div onClick={toggleAuthMenu}>
                    <button type="button" className="btnUser">
                        <img src={userIcon} alt="Logo" width="30" height="30" className="d-inline-block align-text-center ms-2"></img>
                    </button>
                    <div className='boxAuthMenu'>
                        <AnimatePresence mode="wait" >
                            <motion.div
                                key={authMenu}
                                initial={{ y: -50,opacity: 0 }}
                                animate={{ y: 0,opacity: 1 }}
                                exit={{ y: -50,opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                            {authMenu &&
                                <div className='authMenu'>
                                    {user == null ?
                                        <ul className="">
                                            <li><NavLink className="" to="/register">Inscription</NavLink></li>
                                            <li><NavLink className="" to="/login">Connexion</NavLink></li>
                                        </ul>
                                        :
                                        <ul className="">
                                            <li><NavLink className="" onClick={deconexion}>Déconnexion</NavLink></li>
                                        </ul>
                                    }
                                </div>
                            }
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                {/* Menu reponssive */}
                <button type="button" className='btnBurgeur' onClick={togglePhoneMenu}>
                    <img src={burgeur} alt="Logo" width="40" height="40" className="d-inline-block align-text-center ms-2"></img>
                </button>
                <div className='boxPhoneMenu'>
                    <AnimatePresence mode="wait" >
                        <motion.div
                            key={showPhoneMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {showPhoneMenu &&
                            <ul className='phoneMenu'>
                                <li className="" onClick={togglePhoneMenu}>
                                    <NavLink className="" to='/actualite'>Actualité</NavLink>
                                </li>
                                <li className="" onClick={togglePhoneMenu}>
                                    <NavLink className="" to='/programme'>Programme</NavLink>
                                </li>
                                {/* <li className="">
                                    <a className="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Programme
                                    </a>
                                    <ul className="">
                                        <li><NavLink className="" to='/programme'>Programme</NavLink></li>
                                        <li><NavLink className="" to='/artiste'>Artiste</NavLink></li>
                                    </ul>
                                </li> */}
                                <li className="" onClick={togglePhoneMenu}>
                                    <NavLink className="" to='/billetterie'>Billetterie</NavLink>
                                </li>
                                <li className="" onClick={togglePhoneMenu}>
                                    <NavLink className="" to='/sponsor'>Sponsors</NavLink>
                                </li>
                                <li className="" onClick={togglePhoneMenu}>
                                    <NavLink className="" to='/about'>A-propos</NavLink>
                                </li>
                                <li className="" onClick={togglePhoneMenu}>
                                    <NavLink className="" to='/map'>map</NavLink>
                                </li>
                                <li className="" onClick={toggleAuthPhoneMenu}>
                                    <img src={userIcon} alt="Logo" width="30" height="30" className=""></img>
                                </li>
                                <div className='boxPhoneAuthMenu'>
                                    <AnimatePresence mode="wait" >
                                        <motion.div
                                            key={authPhoneMenu}
                                            initial={{ y: -20,opacity: 0 }}
                                            animate={{ y: 0,opacity: 1 }}
                                            exit={{ y: -20,opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                        {authPhoneMenu &&
                                            <div className='authMenu'>
                                                {user == null ?
                                                    <ul className="">
                                                        <li><NavLink className="" to="/register">Inscription</NavLink></li>
                                                        <li><NavLink className="" to="/login">Connexion</NavLink></li>
                                                    </ul>
                                                    :
                                                    <ul className="">
                                                        <li><NavLink className="" onClick={deconexion}>Déconnexion</NavLink></li>
                                                    </ul>
                                                }
                                            </div>
                                        }
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </ul>
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>
                        <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-3"></img>
                        Nation Sound
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/actualite'>Actualité</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Programme
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to='/programme'>Programme</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/artiste'>Artiste</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/billetterie'>Billetterie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/sponsor'>Sponsors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>A-propos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/map'>map</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ">
                        <li className="btn-group dropstart ">
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            <img src={userIcon} alt="Logo" width="30" height="30" className="d-inline-block align-text-center ms-2"></img>
                            </button>
                            {user == null ?
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/register">Inscription</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/login">Connexion</NavLink></li>
                            </ul>
                            :
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={deconexion}>Déconnexion</button></li>
                            </ul>
                            }
                            
                        </li>
                        {user != null &&
                            <li className="nav-item d-flex align-items-center">
                                    <p className='mb-0 mx-3'>{user.username}</p>
                            </li>
                        }
                    </ul>
                    </div>
                </div>
            </nav> */}
        </>
    );
};

export default Navigation;