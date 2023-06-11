import React, { useEffect } from 'react'
import './styles/Carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/a11y';
import 'swiper/scss/effect-fade'
import { A11y, Pagination, Autoplay, EffectFade} from 'swiper';
import data from '../data/data'
import { useNavigate } from 'react-router-dom';
import { setProductIdGlobal } from '../store/slices/productId.slice';
import { useDispatch } from 'react-redux';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';


const Carousel = () => {

  const menjurje = data.find(objet => objet.id===9)
  const tratamiento = data.find(objet => objet.id===11)
  const perfume = data.find(objet => objet.id===10)
  const navigate = useNavigate()  
  const dispatch = useDispatch()

  const handleClickProduct1 = () => {
    navigate('/products/Menjurje')
    dispatch(setProductIdGlobal(menjurje))
  }

  const handleClickProduct2 = () => {   
    navigate('/products/Perfume-Capilar-Citrico')
    dispatch(setProductIdGlobal(perfume))
  }

  const handleClickProduct3 = () => {
    navigate('/products/Tratamiento-Alisador-Progresivo') 
    dispatch(setProductIdGlobal(tratamiento))      
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const animationTitle = document.querySelectorAll('.carousel__animation');
    gsap.fromTo(animationTitle, {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      stagger: .3,
      scrollTrigger: {
        trigger: animationTitle,
        start: 'top 80%'
      }
    })
    
    const imgAnimation = document.querySelector('.carousel__animation-img');
        gsap.fromTo(imgAnimation, {
            opacity: 0,
            x: 20,
            duration: 1.5
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: imgAnimation,
                start: 'top 70%'
            }
        })

  }, [])

  return (
       <Swiper
        modules={[ Pagination, A11y, Autoplay, EffectFade]}        
        slidesPerView={1}
        loop= { true }
        effect='fade'
        fadeEffect={ true }
        effectFade= { true }
        EffectFade= { true }
        FadeEffect= { true }
        autoplay= {{delay: 4000}}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

        >
        <SwiperSlide>
          <div className="slider1">
            <div className="slider1__container">
                <div className='slider1__info'>
                  <span className='slider1__info-span carousel__animation'>Menjurje</span>
                  <h3 className='carousel__animation'>Es una mascarilla nocturna altamente nutritiva</h3>
                  <p className='carousel__animation'>Ideal para cabellos secos, maltratados, deshidratados, porosos, decolorados, con caída excesiva y estancados.</p>
                  <div onClick={handleClickProduct1} className="slider1__btn-container carousel__animation">
                    <button  className="button5 button5--bestia">
                      <div className="button5__bg"></div>
                      <span className="button5__text">Ver más</span>
                    </button> 
                  </div>
                </div>
                <div className='slider1__img carousel__animation-img'>
                  <img src={menjurje.image} alt="" />
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider1">
            <div className="slider1__container">
                <div className='slider1__info'>
                  <span className='slider1__info-span'>Perfume Capilar</span>
                  <h3>Fragancia capilar con notas cítricas</h3>
                  <p>No genera grasa, ayuda a controlar el frizz, aporta brillo y suavidad, es libre de alcohol y parabenos.</p>
                  <div className="slider1__btn-container">
                    <button onClick={handleClickProduct2} className="button5 button5--bestia">
                      <div className="button5__bg"></div>
                      <span className="button5__text">Ver más</span>
                    </button> 
                  </div>
                </div>
                <div className='slider2__img'>
                  <img src={perfume.image} alt="" />
                </div>
            </div>
          </div>
        </SwiperSlide>       
        <SwiperSlide>
        <div className="slider1">
            <div className="slider1__container">
                <div className='slider1__info'>
                  <span className='slider1__info-span'>Tratamiento Alisador</span>
                  <h3>Proporciona brillo y vitalidad al cabello</h3>
                  <p>Totalmente libre de formol, amoniaco, parabenos, siliconas y conservantes, apto para niñas y mujeres en estado de embarazo.</p>
                  <div className="slider1__btn-container">
                    <button onClick={handleClickProduct3} className="button5 button5--bestia">
                      <div className="button5__bg"></div>
                      <span className="button5__text">Ver más</span>
                    </button> 
                  </div>
                </div>
                <div className='slider1__img'>
                  <img src={tratamiento.image} alt="" />
                </div>
            </div>
          </div>
        </SwiperSlide>        
       </Swiper>
       
  )
}

export default Carousel
