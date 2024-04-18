import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import slide_1 from './images/slide 1.jpg'
import slide_2 from './images/slide 2.jpg'
import slide_3 from './images/slide 3.jpg'
import slide_4 from './images/slide 4.jpg'
import slide_5 from './images/slide 5.jpg'
import slide_6 from './images/slide 6.jpg'
import slide_7 from './images/slide 7.jpg'
import slide_8 from './images/slide 8.jpg'
import slide_9 from './images/slide 9.jpg'
import slide_10 from './images/slide 10.jpg'
import slide_11 from './images/slide 11.jpg'
import slide_12 from './images/slide 12.jpg'


const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className="embla1">
      <div className="embla__viewport1" ref={emblaRef}>
        <div className="embla__container1">
        <div class='embla__slide1'>
            <img src={slide_1} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_2} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_3} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_4} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_5} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_6} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_7} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_8} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_9} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_10} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_11} alt=''/>
          </div>
          <div class='embla__slide1'>
            <img src={slide_12} alt=''/>
          </div>

        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
