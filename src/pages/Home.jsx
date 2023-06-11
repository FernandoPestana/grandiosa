import React, { useEffect, useRef } from 'react'
import './styles/Home.scss'
import Carousel from '../components/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNameProductGlobal } from '../store/slices/nameProduct.slice';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Home = () => {

    const products = useSelector(state => state.products);  
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    useEffect(() => {
        const titleAnimation = document.querySelectorAll('.home__animation-1')
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(titleAnimation, {                
          opacity:0,
          y: 20,
          duration: .8,
          
        }, {
          opacity: 1,
          y: 0,
          stagger: .08,
          scrollTrigger: {
              trigger: titleAnimation,
              start: 'top 80%',
          }
        })

        gsap.fromTo('.home__animation-btn', {
            opacity: 0,
            y: 10,
            duration: 1,
        }, {
            opacity:1 ,
            y: 0,
            scrollTrigger: {
                trigger: '.home__animation-btn',
                start: 'top 90%'
            }
        })

        const imgAnimation = document.querySelector('.home__animation-img');
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

        const subTitleAnimation = document.querySelectorAll('.home__animation-2');
            gsap.fromTo(subTitleAnimation, {
                opacity: 0,
                duration: 1,
            }, {
                opacity: 1,
                stagger: .2,
                scrollTrigger: {
                    trigger: subTitleAnimation,
                    start: 'top 80%',
                   
                }
            })

    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
          
    const togglebutton = () => {
        navigate('/products')
        const allProducts = products;
        dispatch(setNameProductGlobal(allProducts))
    }  

  return (
    <div className="home__content">    
        <div className="slide1__container">
            <div className="slide1__img-content">
                <img className='slide1__img' src="/public/images/bc-img.png" alt="empty" />
            </div>
        </div>   
              
        <div className='home__card-container'>       
            <div className="home__card-content">
                <div className='home__card-info-container'>
                    <div className="home__h1">
                        <div className="home__h1-img-container">
                            <img className='home__h1-img' src="public/images/products-bg.png" alt="" />
                        </div>
                        <div className="home__title-container home__animation">
                            <p className='home__title'><span className='home__animation-1'>La</span> <span className='home__animation-1'>belleza</span> <span className='home__animation-1'>natural</span> <span className='home__animation-1'>comieza</span> <span className='home__animation-1'>con</span> <span className='home__animation-1'>un</span> <span className='home__animation-1'>cabello</span> <span className='home__animation-1'>sano,</span> <span className='home__animation-1'>encuentra</span> <span className='home__animation-1'>aquí</span> <span className='home__animation-1'>tus</span> <span className='home__animation-1'>aliados</span></p>
                            <div onClick={togglebutton} className='home__btn-container home__animation-btn'>                                
                                <button  className="button button--bestia">
                                    <div className="button__bg"></div>
                                        <span className="button__text">Ver productos</span>
                                </button>                               
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className='home__card-img-container'>
                    <img className='home__card-img home__animation-img' src="public/images/bg.jpg" alt="" />
                </div>
            </div>
        </div>

        <div className='home__section-container'>
            <div className='home__section'><span className='home__section-text'><span className='home__animation-2'>Nuestros</span> <span className='home__animation-2'>productos</span> <span className='home__animation-2'>más</span> <span className='home__animation-2'>populares</span></span></div>
        </div> 
            <Carousel />
    </div>
  )
}

export default Home
