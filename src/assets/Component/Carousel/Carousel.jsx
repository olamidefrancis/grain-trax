import React from 'react'
import one from '../../Images/doc3.jpg'
import two from '../../Images/two.jpg'
import three from '../../Images/four.jpg'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import './Carousel.css'


function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay ({delay:8000})])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="control">

        <div className="embla" >
              <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">

                          <div className="embla__slide"> 
                                <figure>
                                  <img src={three} alt="four" />
                                </figure> 

                                 <div className="content">
                                      <div className="title">Agricultural Tractors & Machinery
                                      </div>
                                 </div> 

                          </div>

                          <div className="embla__slide">
                                      <figure>

                                        <img src={two} alt="four" />
                                      </figure>

                                      <div className="content">
                                          <div className="title">Precious Metals
                                          </div> 
                                       </div> 
                          </div>


                          <div className="embla__slide">
                              <figure>
                                <img src={one} alt="four" />

                              </figure>

                              <div className="content">
                                  <div className="title">Medical Equipment & Accessories</div>
                                  
                                  
                              </div> 

                          </div> 
                  </div>

              </div> 

              

              <div className="button__container arrows">
                            <button className="embla__prev " onClick={scrollPrev}>
                                {"<"}
                            </button>
                            <button className="embla__next " onClick={scrollNext}>
                              {">"}
                            </button>

              </div>
        </div>
   </div>
  )
}


export default EmblaCarousel