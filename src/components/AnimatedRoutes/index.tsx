import { Route, Routes, useLocation } from 'react-router-dom';
import { SignUp, SignIn, Feed } from '../../pages'

import { AnimatePresence } from 'framer-motion'
import './index.scss'

const AnimatedRoutes = () => {
    const location = useLocation()
    const getClassName = () => {
        let className = ""
        switch (location.pathname) {
            case "/signup":
                className = "Full-Page"
                break;
            case "/signin":
                className = "Full-Page"
                break;
            default:
                break;
        }
        return className
    }
    return (
    <AnimatePresence>
        <section className={getClassName()}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed/>}/>
        </Routes>
        </section>
    </AnimatePresence>)
    
}

export default AnimatedRoutes