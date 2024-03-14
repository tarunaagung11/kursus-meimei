import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' className='john'/>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Kursus Meimei merupakan tempat belajar Bahasa Mandarin yang sudah hadir di Kota Kendari dan menjadi yang pertama di Sulawesi Tenggara (Sultra).  Tapi kami tidak hanya menyediakan kursus bahasa Mandarin namun juga ada banyak kursus yang lain seperti Bahasa Inggris, Seni Lukis, Design grafis, Matematika, Biologi, Kimia, dan Fisika. Kursus Meimei juga memiliki guru atau tutor yang merupakan lulusan universitas di Cina dan Universitas Terkemuka di Indonesia sehingga bisa membawakan menjadi pengajar yang relevan dengan calon siswanya. </p>
                    <a rel="noreferrer" href="https://desty.page/kursusmeimeijiaoyu" target="_blank"><button className='button' >Cari tahu selengkapnya</button></a>
                </div>
            </div>
        </div>
    )
}

export default About
