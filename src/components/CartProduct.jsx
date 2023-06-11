import React, { useEffect, useState } from 'react'
import './styles/CartProduct.scss'
import { removeFromCart, setCartGlobal } from '../store/slices/cart.slice'
import { updateCartItemPrice } from '../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import { setSubTotalGlobal } from '../store/slices/subtotal.slice'
import { setProductQuantityGlobal, updateQuantity } from '../store/slices/productQuantity.slice'

const CartProduct = ({ cartProduct }) => {

  const [quantity, setQuantity] = useState(1) 
  const subtotal = useSelector(state => state.subtotal)
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id))
  }

  const handlePlus = () => {
    setQuantity(quantity +1)
  }
    
  const handleMinus = () => {
      const newValue = quantity -1
      if(newValue >= 1)
      {
          setQuantity(newValue)
      }
  }

  const price = cartProduct.price  
  const finalPrice = (price)*quantity     
   

  /* useEffect(() => {
    const data = {
      id: cartProduct.id,
      price: cartProduct.price,
      quantity: cartProduct.quantity
    }
    dispatch(setSubTotalGlobal(price))
    dispatch(setProductQuantityGlobal(data))
    dispatch(updateQuantity(quantity))
    console.log(quantity)
  },[quantity]) */


  return (
    <article className='cartProduct'>
      <div className="cartProduct__container">
          <div className='cartproduct__img-container'>
              <img className='cartProduct__img' src={cartProduct.image} alt="" loading='lazy' />
          </div>
          <div className='cartProduct__info-container'>
              <div className='cartProduct__title-container'>
                  <span>{cartProduct.title}</span>
                  <div className="cartProduct__trash"><em onClick={() => handleDelete(cartProduct.id)} className='bx bx-trash'></em></div>
              </div>            
              <div className='cartProduct__quantity-content'>
                  <div className='cartProduct__quantity-container'>
                      <div onClick={handleMinus} className="cartProduct__quantity-i">-</div>
                      <span className='cartProduct__quantity-title'>{quantity}</span>
                      <div onClick={handlePlus} className="cartProduct__quantity-i">+</div>
                  </div>
                  <div className='cartProdudt__total'>$ {finalPrice}.000</div>
              </div>
          </div>
      </div>
    </article>
  )
}

export default CartProduct
