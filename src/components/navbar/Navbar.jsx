import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom'
import { delay, motion } from 'framer-motion'
const Navbar = () => {

    // mobile view
    const [ toggleMenu, setToggleMenu ] = useState(false)

    // set navbar color when scroll
    const [ color, setColor ] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 150) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className='fixed'>
    <div className={color ? 'navbar active' : 'navbar'} >
        <div className="navbar-logo">
            <img src={logo} alt='' />
        </div>
        <motion.div className={color ? 'navbar-links active' : 'navbar-links'}
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', delay: 0.5 }}
        >
            <Link to='/'><a href='#'>Home</a></Link>
            <Link to='/about_us'><a href='#'>About Us</a></Link>
            <Link to='/services'><a href='#'>Services</a></Link>
            <Link to='/our_teams'><a href='#'>Our Teams</a></Link>
            <Link to='/contact_us'><button className={color ? 'navbar-links active' : 'navbar-links'}>Contact Us</button></Link>
        </motion.div>

        <div className="navbar-menu">
            {toggleMenu
                ? <img src={close} style={{width: 30}} onClick={() => setToggleMenu(false)} />
                : <img src={menu} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&
                <div className="menu-links">
                    <Link to='/'><a href='#'>Home</a></Link>
                    <Link to='/about_us'><a href='#'>About Us</a></Link>
                    <Link to='/services'><a href='#'>Services</a></Link>
                    <Link to='/our_teams'><a href='#'>Our Teams</a></Link>
                    <Link to='/contact_us'><button>Contact Us</button></Link>
                </div>
            }
        </div>
    </div>
    </div>
  )
}

export default Navbar