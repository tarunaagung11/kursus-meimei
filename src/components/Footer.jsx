import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import whatsapp from './images/wa.png'

const Footer = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='footer'>
            <div className='container' onClick={handleClick}>
                <ul>
                <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} >Tentang Kami</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="program_container" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} >Program Kursus</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="tenaga" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} >Tenaga Pengajar</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="div3" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Kontak</Link>
                    </li>
                </ul>
                
                <div className='bottom'>
                    <span className='line'></span>
                    <div class="rounded-social-buttons">
                        <a rel="noreferrer" class="social-button facebook" href="https://www.facebook.com/profile.php?id=100085413673108" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a rel="noreferrer" class="social-button tiktok" href="https://www.tiktok.com/@kursusmandarinmeimei" target="_blank"><i class="fab fa-tiktok"></i></a>
                        <a rel="noreferrer" class="social-button instagram" href="https://www.instagram.com/meimeijiaoyu.ofc" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
                    <p>2024 Execute, Inc. All rights reserved</p>
                </div>
                <div>
                <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=6285222297913&text=Halo+kak+saya+ingin+info+tentang+Kursus+Meimei" target="_blank">
                    <button class="btn-floating whatsapp">
                    <img src={whatsapp} alt="whatsApp"/>
                    <span>Kursus Meimei 0852-2229-7913</span>
                    </button>
                </a>
  
                </div>
            </div>
        </div>
    )
}

export default Footer
