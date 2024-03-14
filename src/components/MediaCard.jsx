import React from 'react'
import './MediaCard.css'
import lin_laoshi from './images/lin laoshi.png' 
import nana_laoshi from './images/nana laoshi.png'
import miss_tiya from './images/miss tiya.png'
import miss_syenja from './images/miss syenja.png'
import miss_intan from './images/miss intan.png'
import miss_mei from './images/miss mei.png'


const MediaCard = () => {
  return (
    <><h1 class='tenaga'>Tenaga Pengajar</h1>
    <div class='card-image'>
      <div class='gambar'>
        <img src={lin_laoshi} alt='lin laoshi' />
      </div>
      <div class='gambar'>
        <img src={nana_laoshi} alt='nana laoshi' />
      </div>
      <div class='gambar'>
        <img src={miss_tiya} alt='miss tiya' />
      </div>
      <div class='gambar'>
        <img src={miss_syenja} alt='miss syenja' />
      </div>
      <div class='gambar'>
        <img src={miss_intan} alt='miss intan' />
      </div>
      <div class='gambar'>
        <img src={miss_mei} alt='miss mei' />
      </div>
    </div></>
  )
}

export default MediaCard