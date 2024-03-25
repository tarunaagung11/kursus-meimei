import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' className='john'/>
                <div className='text-[white] flex flex-col justify-center items-center p-0.5 first:text-justify text-[1.3rem] italic font-semibold mx-0 my-8'>
                    <h2 className='text-[black] flex justify-center items-center h-[70px] w-full lg:w-1/2 relative text-center font-bold border-[none];
  bg-[#ffea00] rounded-full text-3xl'>Tentang Kami</h2>
                    <span className='line'></span>
                    <p className=' text-justify'>Kursus Meimei merupakan tempat belajar Bahasa Mandarin yang sudah hadir di Kota Kendari dan menjadi yang pertama di Sulawesi Tenggara (Sultra).  Tapi kami tidak hanya menyediakan kursus bahasa Mandarin namun juga ada banyak kursus yang lain seperti Bahasa Inggris, Seni Lukis, Design grafis, Matematika, Biologi, Kimia, dan Fisika. Kursus Meimei juga memiliki guru atau tutor yang merupakan lulusan universitas di Cina dan Universitas Terkemuka di Indonesia sehingga bisa menjadi pengajar yang relevan dengan calon siswanya. </p>
                    <a rel="noreferrer" href="https://desty.page/kursusmeimeijiaoyu" target="_blank"><button className='button' >Cari tahu selengkapnya</button></a>
                </div>
            </div>
        </div>
    )
}

export default About
