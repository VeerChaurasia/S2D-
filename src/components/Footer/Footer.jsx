import React from 'react';
import{FaBars, FaTimes, FaInstagram,FaDiscord,FaFacebook,FaHeart} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import './Footer.css'

function Footer() {
  return (
    <div name='Footer' className='Footer'>
        <div className='text'>
            Made with Love
            <FaHeart />

        </div>
        <div className='social'>
            <a href='https://www.instagram.com/p/C1uLFxevI98/?img_index=1'>
                <FaInstagram className='icons' />
            </a>
            <a href='https://discord.com/invite/Zvq3rpjBAB'>
                <FaDiscord className='icons' />
            </a>
            <a href='https://twitter.com/BlocSocIITR'>
                <FaXTwitter className='icons' />
             </a>
            <a href='https://m.facebook.com/BlocSocIITR'>
                <FaFacebook className='icons' />
            </a>
        </div>

    </div>
  );
}

export default Footer;
