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

//////////////////////////////////////////////////// Fonction pour récupérer l'utilisateur////////////////////////////////////////
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()

    //Fonction pour se déconnecter
    const deconexion = () => {
        // dispatch(clearUser()); // Appelle l'action logout pour effacer les informations utilisateur et le token
        dispatch(logout_user())
    };

////////////////////////////////////////////////////// Fonction pour les buttons en mode desktop////////////////////////////////
    //Pour le button Auth
    const [authMenu, setAuthMenu] = useState(false)
    function toggleAuthMenu(){
        setAuthMenu(!authMenu)
        setShowProgMenu(false)
    }
    //Pour le button programme
    const [showProgMenu, setShowProgMenu] = useState(false);
    function toggleShowProgMenu(){
        setShowProgMenu(!showProgMenu)
        setAuthMenu(false)
    }
    function turnOffAuthProgMenu(){
        if (showProgMenu) {
            setShowProgMenu(false)
        }
        if (authMenu) {
            setAuthMenu(false)
        }
    }

///////////////////////////////////////////////// Fonction pour les buttons en mode phone ////////////////////////////////    
    const [showPhoneMenu, setShowPhoneMenu] = useState(false)
    function togglePhoneMenu(){
        setShowPhoneMenu(!showPhoneMenu)
        setProgPhoneMenu(false)
        setAuthPhoneMenu(false)
    }
    const [progPhoneMenu, setProgPhoneMenu] = useState(false)
    function toggleProgPhoneMenu(){
        setProgPhoneMenu(!progPhoneMenu)
    }
    const [authPhoneMenu, setAuthPhoneMenu] = useState(false)
    function toggleAuthPhoneMenu(){
        setAuthPhoneMenu(!authPhoneMenu)
    }

    return (
        <nav className='navBar'>
            <NavLink className="home" to='/'>
                <img src={logo} alt="Logo" width="40" height="40" className="logo"></img>
                <h1>Nation Sound</h1>
            </NavLink>
            <ul className='menu'>
                <li onClick={turnOffAuthProgMenu}>
                    <NavLink to='/actualite'>Actualité</NavLink>
                </li>
                <motion.li initial={false} animate={showProgMenu ? "open" : "closed"} >
                    <motion.div onClick={toggleShowProgMenu} className='btnProg'>
                        <p>Programme</p>
                        <motion.div variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }} transition={{ duration: 0.2 }} style={{ originY: 0.55 }}>
                            <svg width="15" height="15" viewBox="0 0 20 20">
                                <path d="M0 7 L 20 7 L 10 16" fill="white"/>
                            </svg>
                        </motion.div>
                    </motion.div>
                    <motion.ul className='progMenu' style={{ pointerEvents: showProgMenu ? "auto" : "none" }}
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
                    >
                        <motion.li onClick={toggleShowProgMenu}><NavLink to='/programme'>Programme</NavLink></motion.li>
                        <motion.li onClick={toggleShowProgMenu}><NavLink to='/artiste'>Artiste</NavLink> </motion.li>
                    </motion.ul>
                </motion.li>
                <li onClick={turnOffAuthProgMenu}>
                    <NavLink to='/billetterie' >Billetterie</NavLink>
                </li>
                <li onClick={turnOffAuthProgMenu}>
                    <NavLink to='/sponsor'>Sponsors</NavLink>
                </li>
                <li onClick={turnOffAuthProgMenu}>
                    <NavLink to='/about'>A-propos</NavLink>
                </li>
                <li onClick={turnOffAuthProgMenu}>
                    <NavLink to='/map'>map</NavLink>
                </li>
            </ul>
            <div onClick={()=>{toggleAuthMenu()}} className='btnUser'>
                <motion.div initial={false} animate={authMenu ? "open" : "closed"}>
                    <img src={userIcon} alt="Logo" width="30" height="30" className="d-inline-block align-text-center ms-2 btnUser"></img>
                    <motion.ul className='boxAuthMenu' style={{ pointerEvents: authMenu ? "auto" : "none" }}
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
                                clipPath: "inset(10% 20% 90% 50% round 10px)",
                                transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                                }
                            }
                        }}
                    >
                        {user == null ?
                            <>
                                <li><NavLink to="/register">Inscription</NavLink></li>
                                <li><NavLink to="/login">Connexion</NavLink></li>
                            </>
                            :
                            <li><NavLink onClick={deconexion}>Déconnexion</NavLink></li>
                        }
                    </motion.ul>
                </motion.div>
            </div>
            {/* Menu reponssive */}
            <button type="button" className='btnBurgeur' onClick={togglePhoneMenu}>
                <img src={burgeur} alt="Logo" width="40" height="40" className="d-inline-block align-text-center ms-2"></img>
            </button>
            <div className='boxPhoneMenu'>
                <AnimatePresence mode="wait" >
                    <motion.div
                        key={showPhoneMenu}
                        initial={{ height:0 }}
                        animate={{ height: "auto" }}
                        exit={{ height:0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        {showPhoneMenu &&
                        <ul className='phoneMenu'>
                            <li onClick={togglePhoneMenu}>
                                <NavLink to='/actualite'>Actualité</NavLink>
                            </li>
                            <motion.li onClick={toggleProgPhoneMenu} initial={false} animate={showProgMenu ? "open" : "closed"}>
                                <motion.div onClick={toggleShowProgMenu} className='btnProg'>
                                    <p>Programme</p>
                                    <motion.div variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }} transition={{ duration: 0.2 }} style={{ originY: 0.55 }}>
                                        <svg width="15" height="15" viewBox="0 0 20 20">
                                            <path d="M0 7 L 20 7 L 10 16" fill="white"/>
                                        </svg>
                                    </motion.div>
                                </motion.div>
                                <AnimatePresence>
                                    <motion.div
                                        key={progPhoneMenu}
                                        initial={{ height:0, opacity: 0 }}
                                        animate={{ height:"auto", opacity: 1 }}
                                        exit={{ height:0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                    {progPhoneMenu &&
                                        <ul className='ulList'>
                                            <li><NavLink to='/programme'>Programme</NavLink></li>
                                            <li><NavLink to='/artiste'>Artiste</NavLink></li>
                                        </ul>
                                    }
                                    </motion.div>
                                </AnimatePresence>
                                
                            </motion.li>
                            <li onClick={togglePhoneMenu}>
                                <NavLink to='/billetterie'>Billetterie</NavLink>
                            </li>
                            <li onClick={togglePhoneMenu}>
                                <NavLink to='/sponsor'>Sponsors</NavLink>
                            </li>
                            <li onClick={togglePhoneMenu}>
                                <NavLink to='/about'>A-propos</NavLink>
                            </li>
                            <li onClick={togglePhoneMenu}>
                                <NavLink to='/map'>map</NavLink>
                            </li>
                            <li onClick={toggleAuthPhoneMenu}>
                                <img src={userIcon} alt="Logo" width="30" height="30"/>
                            </li>
                            <div className='boxPhoneAuthMenu'>
                                <AnimatePresence>
                                    <motion.div
                                        key={authPhoneMenu}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                    {authPhoneMenu &&
                                        <div>
                                            {user == null ?
                                                <ul className='ulList'>
                                                    <li><NavLink to="/register">Inscription</NavLink></li>
                                                    <li><NavLink to="/login">Connexion</NavLink></li>
                                                </ul>
                                                :
                                                <ul className='ulList'>
                                                    <li><NavLink onClick={deconexion}>Déconnexion</NavLink></li>
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
    );
};

export default Navigation;