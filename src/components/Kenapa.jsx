import React from 'react'
import './Kenapa.css'

const Kenapa = () => {
  return (
    <div className="bg-black border-none">
  <section
    id="features"
    className="relative block px-6 py-6 md:py-20 md:px-10  border-none "
  >
    <div className=" relative mx-auto max-w-5xl text-center">
      <div className='bg-[#FFFF00] rounded-full w-full'><h2 className=" block w-full bg-gradient-to-b text-black bg-clip-text font-bold text-2xl sm:text-4xl  ">
      Kenapa Harus Belajar
        </h2>
        <h2 className=" block w-full bg-gradient-to-b text-black bg-clip-text font-bold text-2xl sm:text-4xl  ">
      di Kursus Meimei?
        </h2>
      </div>
      <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-white">
      Kami berkomitmen untuk selalu memberikan pelayanan kegiatan belajar dan mengajar yang terbaik.
      </p>
    </div>
    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-md border border-neutral-800 bg-[#FFFF00] p-8 text-center shadow">
        <div
          className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border-none "
        >
        <img
        src="https://www.svgrepo.com/show/229758/teacher.svg"
        alt="Bahasa Mandarin"
      />
        </div>
        <h3 className="mt-6 text-black font-bold ">Guru Profesional</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
          Guru merupakan lulusan Universitas Cina dan Universitas terkemuka di Indonesia. 
        </p>
      </div>
      <div className="rounded-md border border-neutral-800 bg-[#FFFF00] p-8 text-center shadow">
        <div
          className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border-none "
        >
        <img
        src="https://www.svgrepo.com/show/492819/online-interview-female.svg"
        alt="Bahasa Mandarin"
      />
        </div>
        <h3 className="mt-6 text-black font-bold">Kelas Flexible</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
          Kami menyediakan kelas offline dan online bagi yang kesulitan mencari waktu belajar 
        </p>
      </div>
      <div className="rounded-md border border-neutral-800 bg-[#FFFF00] p-8 text-center shadow">
        <div
          className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border-none "
        >
        <img
        src="https://www.svgrepo.com/show/277495/graduate-mortarboard.svg"
        alt="Bahasa Mandarin"
      />
        </div>
        <h3 className="mt-6 text-black font-bold">Gratis Konsultasi Beasiswa</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
          Layanan konsultasi dan bimbingan gratis dan mendukung para pelajar untuk melanjutkan kuliah ke luar negeri
        </p>
      </div>
    </div>
    <div
      className="absolute bottom-0 left-0 z-0 h-1/3 w-full "
    ></div>
    <div
      className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
    ></div>
  </section>
</div>

  )
}

export default Kenapa