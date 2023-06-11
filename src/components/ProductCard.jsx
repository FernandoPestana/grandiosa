import React, { useEffect, useState } from 'react'
import './styles/ProductCard.scss'
import { setCartGlobal } from '../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProductIdGlobal } from '../store/slices/productId.slice'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'

const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart) 
  const nav = useSelector(state => state.nav)  
  const minicart = useSelector(state => state.minicart)
  const search = useSelector(state => state.search) 

 gsap.registerPlugin(ScrollTrigger);

 useEffect(() => {
    gsap.fromTo('.animated__card', {
      opacity: 0,
      duration: 1,
      y: 20
    }, 
    {
      opacity: 1,
      y: 0,
      delay: .5,
      scrollTrigger: {
        trigger: '.animated__card',
        start: 'top 80%'
      }
    })
 }, [])

  const handleClickAddCart = (e) => {
    e.stopPropagation()
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

  const handleClickProduct = () => {
  navigate(`/products/${product.title.replace(/\s+/g, '-')}`)
    const data = {
      id: product.id,
      category: product.category,
      image: product.image,
      title: product.title,
      description: product.description,
      use: product.use,
      price: product.price,      
    }
    dispatch(setProductIdGlobal(data))
  }

  return (
    <article className={`productcard ${ search ? 'isActive' : ''} ${ nav ? 'isActive' : ''} ${ minicart ? 'isActive' : ''} animated__card`} onClick={handleClickProduct}>
      <header className='productcard__header'>
        <img className='productcard__img' src={product.image} alt="" loading='lazy'/>
      </header>
      <div className="productcard__body">
        <h3 className="productcard__title">{product.title}</h3>        
          <p className="productcard__price">${product.price}.000</p>        
        <div className="productcard__btn-container">
          <button onClick={handleClickAddCart} className="button1 button1--bestia">
            <div className="button1__bg"></div> 
            <span className="button1__text">Añadir al carrito</span>
          </button>  
        </div>
      </div>
    </article>
  )
}

export default ProductCard
