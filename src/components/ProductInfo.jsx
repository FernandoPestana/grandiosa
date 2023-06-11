import React, { useEffect } from 'react'
import './styles/ProductInfo.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCartGlobal } from '../store/slices/cart.slice';
//import { loadState, saveState } from '../utils/localStorage';
import { setProductIdGlobal } from '../store/slices/productId.slice';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ProductInfo = () => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.productId)
    const cart = useSelector(state => state.cart)  
    const nav = useSelector(state => state.nav)  
    const search = useSelector(state => state.search)
    const minicart = useSelector(state => state.minicart)
    const productId = useSelector(state => state.productId)

    gsap.registerPlugin(ScrollTrigger)
    
    // Guardar el estado productId en el almacenamiento local cuando cambie
    useEffect(() => {        
        localStorage.setItem('productId', JSON.stringify(productId))             
    }, [productId]);

    useEffect(() => {
        const productAnimation = document.querySelector('.product__animation-img')
        gsap.fromTo(productAnimation, {
            opacity: 0,
            x: -20,
            duration:1
        },
        {
            opacity:1,
            x: 0,
            delay: .5
        })

        gsap.fromTo('.product__animation-info', {
            opacity: 0,
            x: 20,
            duration: 1
        },
        {
            opacity: 1,
            x: 0,
            delay: .5,
        })

        const animationFooter = document.querySelectorAll('.product__animation-footer')
        gsap.fromTo(animationFooter, {
            opacity: 0,
            y: 20,
            duration:1
        },
        {
            opacity: 1,
            y: 0,
            stagger: .5,
            delay: .5,
            scrollTrigger: {
                trigger: animationFooter,
                start: 'top 80%'
            }
        })

        const animationUse = document.querySelector('.product__animation-use')
        gsap.fromTo(animationUse, {
            opacity: 0,
            y: 20,
            duration:1
        },
        {
            opacity: 1,
            y: 0,           
            scrollTrigger: {
                trigger: animationUse,
                start: 'top 80%',
                once: true
            }
        })

    },[productId])


    const handleAddProduct = () => {        
        const data = {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1
        }
        const isInCart = cart.some(product => product.id === data.id);
        if(!isInCart) 
        {      
          dispatch(setCartGlobal(data))
        }
           
      }

  return (
    <article className={`productInfo__container ${ search ? 'isActive' : ''} ${ nav ? 'isActive' : ''} ${ minicart ? 'isActive' : ''}`}>
        <div className="productInfo">
            <div className='productInfo__img-container product__animation-img'>
                <img className='productInfo__img' src={product.image} alt="" />
            </div> 
            <div className='productInfo__info'>
                <header className='productInfo__header product__animation-info'>
                    <h2 className="productInfo__title">{product.title}</h2>
                    <p className='productInfo__description'>{product.description}</p>
                </header>
                <footer className='productInfo__footer '>
                    <h3 className="productInfo__price-title product__animation-footer">Precio: <span>${product.price}.000</span></h3>
                    <div className="productInfo__btn-container product__animation-footer" onClick={handleAddProduct}>
                        <button  className="button2 button2--bestia">
                            <div className="button2__bg"></div> 
                            <span className="button2__text">Añadir al carrito</span>
                        </button> 
                    </div>
                </footer>
            </div>
        </div>
        <div className="productInfo__use-container product__animation-use">
            <div className="productInfo__use">
                <p>Modo de uso: <span>{product?.use}</span></p>
            </div>
        </div>
    </article>
  )
}

export default ProductInfo
