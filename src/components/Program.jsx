import React from 'react'
import './Program.css'

const Program = () => {
  return (
    <div class='program_container'>
    <article className="leaderboard">
  <header>
    <div >
    <div><img src='https://www.svgrepo.com/show/219376/content.svg'
    alt='icon'
    className='leaderboard__icon'
    rel='norefererr' />
    </div>
    <div>
    <h1 className="leaderboard__title">
      <span className="leaderboard__title--top lg:tracking-[1rem]">Program</span>
      <span className="leaderboard__title--bottom lg:tracking-[3rem]">Kursus</span>
    </h1>
    </div>
    </div>
  </header>
  <main className="leaderboard__profiles">
    <article className="leaderboard__profile">
      <img
        src="https://flagsapi.com/CN/flat/64.png"
        alt="Bahasa Mandarin"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Bahasa Mandarin</span>
    </article>
    <article className="leaderboard__profile">
      <img
        src="https://flagsapi.com/GB/flat/64.png"
        alt="Bahasa Inggris"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Bahasa Inggris</span>
    </article>
    <article className="leaderboard__profile">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Circle-icons-art.svg"
        alt="Seni Lukis"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Seni Lukis</span>

    </article>
    <article className="leaderboard__profile">
      <img
        src="https://www.svgrepo.com/show/16734/graphic-design.svg"
        alt="Design Grafis"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Design Grafis</span>
    </article>
    <article className="leaderboard__profile">
      <img
        src="https://toppng.com/uploads/preview/calculator-icon-math-icon-11563227565ddgk3sskht.png"
        alt="Matematika"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Matematika</span>
    </article>
    <article className="leaderboard__profile">
      <img
        src="https://www.svgrepo.com/show/62122/chemistry.svg"
        alt="Kimia"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Kimia</span>
    </article>
    <article className="leaderboard__profile">
      <img
        src="https://www.svgrepo.com/show/190717/physics-nuclear.svg"
        alt="Fisika"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Fisika</span>
    </article>
    <article className="leaderboard__profile">
      <img
        src="https://www.svgrepo.com/show/228269/cells-biology.svg"
        alt="Biologi"
        className="leaderboard__picture"
      />
      <span className="leaderboard__name">Biologi</span>
    </article>
  </main>
</article>
<div></div>
</div>

  )
}

export default Program