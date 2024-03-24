'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import lin_laoshi from './images/lin laoshi.png'
import nana_laoshi from './images/nana laoshi.png'
import miss_tiya from './images/miss tiya.png'
import miss_syenja from './images/miss syenja.png'
import miss_intan from './images/miss intan.png'
import miss_mei from './images/miss mei.png'
import './Slider.css'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay:3000})])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    
    <div class='embla'>
    <h1 class=' tenaga text-[black] bg-[#ffff00] flex justify-center items-center h-[70px] w-full relative text-center font-bold'>Tenaga Pengajar</h1>
      <div class='embla__viewport' ref={emblaRef}>
        <div class='embla__container'>
          <div class='embla__slide'>
            <img src={lin_laoshi} alt='lin_laoshi'/>
          </div>
          <div class='embla__slide'>
            <img src={nana_laoshi} alt='nana_laoshi'/>
          </div>
          <div class='embla__slide'>
            <img src={miss_tiya} alt='miss_tiya'/>
          </div>
          <div class='embla__slide'>
            <img src={miss_syenja} alt='miss_syenja'/>
          </div>
          <div class='embla__slide'>
            <img src={miss_intan} alt='miss_intan'/>
          </div>
          <div class='embla__slide'>
            <img src={miss_mei} alt='miss_mei'/>
          </div>
          <div className='mt-3 flex justify-between'>
        </div>
      </div>
      </div>
      <div class='button_container_embla'><button
          className='button_embla'
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className='button_embla'
          onClick={scrollNext}
        >
          Next
        </button>
        </div>
    </div>

  )
}
