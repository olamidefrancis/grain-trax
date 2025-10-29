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
                                      <div className="topic">
                                          <p>
                                            We are committed to empowering agriculture by delivering reliable,
                                            fuel-efficient machinery for farmers and agricultural enterprises.
                                          </p>

                                           <p>
                                              Our <span class="em">tractors and farm implements</span> are built for performance,
                                              efficiency, and durability, suitable for <span class="em">Africa’s varied terrain</span>
                                              and <span class="em">Europe’s high production standards</span>.
                                          </p>

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
                                          <div className="topic">
                                              <p>
                                                <span class="em">Grain &amp; Trax inc</span> supplies high-quality, ethically sourced
                                                <span class="em">precious metals</span> to clients in manufacturing, jewelry,
                                                and investment sectors.
                                              </p>

                                               <p>
                                                  We ensure compliance with <span class="em">OECD Due Diligence Guidance</span> and
                                                  maintain transparent, responsible sourcing chains.
                                               </p>
                                          </div>
                                         
                                          
                                       </div> 
                          </div>


                          <div className="embla__slide">
                              <figure>
                                <img src={one} alt="four" />

                              </figure>

                              <div className="content">
                                  <div className="title">Medical Equipment & Accessories</div>
                                  <div className="topic">
                                      <p>
                                        At <span class="em">Grain &amp; Trax inc</span>, we specialize in sourcing and supplying
                                        <span class="em">medical devices, accessories, and consumables</span> for healthcare
                                        providers, NGOs, and government institutions.
                                      </p>

                                      <p>
                                        Our products meet international standards (<span class="em">ISO, CE, WHO</span>) and are
                                        designed for both modern hospitals and field clinics across <span class="em">Africa and Europe</span>.
                                      </p>
                                                                      
                                  </div>
                                 
                                  
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