import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles/Minicart.scss'
import { setMinicartGlobal } from '../store/slices/minicart.slice';
import { setNameProductGlobal } from '../store/slices/nameProduct.slice'
import { Link, useNavigate } from 'react-router-dom';
import CartProduct from './cartProduct';
import { setSubTotalGlobal } from '../store/slices/subtotal.slice';
import { gsap } from 'gsap';

const Minicart = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const minicart = useSelector(state => state.minicart);
  const cart = useSelector(state => state.cart);  
  const products = useSelector(state => state.products);
  const timeline = gsap.timeline();

  const toggleMinicartClose = () => {
    dispatch(setMinicartGlobal(false))
    const allProducts = products;
    dispatch(setNameProductGlobal(allProducts))
  }

  const handleClickOutside = (e) => {
    if(!cartRef.current.contains(e.target))
    {
      dispatch(setMinicartGlobal(false))      
    } 
  }

  useEffect(() => {
    const cart = document.querySelectorAll('.minicart__an');     
     if(minicart===true)
     {
        timeline.fromTo(cart, {opacity: 0, y: 25},
        {opacity: 1, y: 0, duration: .4, delay: .5, stagger: .2}) 
     }        
  }, [minicart===true])
  

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)    
  }, [])

  const toggleCheckout = () => {
    navigate('checkout')
    dispatch(setMinicartGlobal(false))
  }

  return (
    <div ref={cartRef} className={`minicart__sidebar ${ minicart ? 'isActive' : ''}`}>
             <div className="minicart">
                <div className="minicart__entries">
                    <h3 className="minicart__title minicart__an">
                      <p className='minicart__title-p'>Mi carrito</p>                                     
                      <em onClick={toggleMinicartClose} className='bx bx-x'></em>
                    </h3>
                        <div className="minicart__full minicart__an">
                            {
                              cart.length > 0 ? (
                                cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} /> )                              

                              ) : (
                                <div className='minicart__info'>
                                  <div className='minicart__info-description'>
                                      <p className='minicart__info-emoji'>👀</p>
                                      <p className='minicart__info-title'>Tu carrito está vacio</p>
                                      <p className='minicart__info-p'>Transforma tu belleza llenando este carrito</p>
                                  </div>
                                  <Link to='/products' >
                                   <div className="minicart__info-btn-container minicart__an" onClick={toggleMinicartClose}>                                           
                                        <button className="button6 button6--bestia button6--custom">
                                            <div className="button6__bg"></div>
                                            <span className="button6__text">Ver productos</span>
                                        </button> 
                                    </div>
                                  </Link>                                                                                                                                  
                                  
                                </div>
                              )
                            }
                      </div>
                      {
                        cart.length > 0 ? (
                          <div className="minicart__footer minicart__an">
                                    <div className="minicart__footer-content">
                                      <div className="minicart__footer-subtotal-container">
                                        <div className="minicart__footer-subtotal"><span>SUBTOTAL</span></div>
                                        <div className="minicart__subtotal-num">{''}</div>
                                      </div>
                                      <div className="minicart__footer-p">
                                          <p>Los costes de envío y los impuestos se añaden durante el pago</p>
                                      </div>
                                      <div className="minicart__footer-btn-container">
                                        <button onClick={toggleCheckout} className="button4 button4--bestia">
                                          <div className="button4__bg"></div> 
                                          <span className="button4__text">FINALIZAR COMPRA</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                        ) : ('')
                      }
                </div>
           </div>
    </div>
  )
}

export default Minicart
