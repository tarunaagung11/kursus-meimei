import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Yukk</p>
                <p>Belajar bersama</p>
                <p>Kursus Meimei</p>
                <p>Jangan Sampai Ketinggalan</p>
                <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=6285222297913&text=Halo+kak+saya+ingin+info+tentang+Kursus+Meimei" target="_blank">
                    <button class="button">
                    <span>Daftar Sekarang</span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Hero
