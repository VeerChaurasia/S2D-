import React, {useState} from 'react';
import{FaBars, FaTimes, FaInstagram,FaDiscord,} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6';
import Blocsoc from '../../assests/Group 27.svg'
import './navbar.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


function Navbar() {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)
    const handleNav = () => {
    setNav(!nav) 
    setSlide(!slide)
    }
    return (
    <div className='navbar'>
        <div className='container'>
            <div className={slide ? 'logo slide-right' : 'logo'}>
                <img src={Blocsoc} />
                

            </div>
            <ul className={nav ? 'navmenu active':'navmenu'}>
            <li><a href='/'><Link activeClass="active" to="Home" spy={true} smooth={true} duration={500} >Home</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="About" spy={true} smooth={true} duration={500} >About</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="Faq" spy={true} smooth={true} duration={500} >FAQs</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="Footer" spy={true} smooth={true} duration={500} >Contact Us</Link></a></li>




                


            

                <div className='mobile'>
                    <button><a href="https://stacktoodeep.devfolio.co">Register</a></button>
                    <div className='social-icons'>
                        <a href='https://www.instagram.com/p/C1uLFxevI98/?img_index=1'>
                        <FaInstagram className='icons' />
                        </a>
                        <a href='https://discord.com/invite/Zvq3rpjBAB'>
                        <FaDiscord className='icons' />
                        </a>
                        <a href='https://twitter.com/BlocSocIITR'>
                        <FaXTwitter className='icons' />
                        </a>
                    </div>
                </div>
            </ul>

            <ul className='navmenu hide'>
                <li><a href="https://stacktoodeep.devfolio.co">Register</a></li>
                

            </ul>

        <div className='hamburger' onClick={handleNav}>
            {nav ? (<FaTimes size={20} style={{color: '#ffffff'}}/>) : (<FaBars size ={20} style={{color: '#ffffff'}} />)}

        </div>

        </div>
    </div>
  )
}

export default Navbar