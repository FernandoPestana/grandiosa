import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import './styles/Products.scss'
import { setNameProductGlobal } from '../store/slices/nameProduct.slice'
import { useEffect, useRef } from 'react'
import { setProductIdGlobal } from '../store/slices/productId.slice'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'

const products = () => {

  const productsList = useSelector(state => state.nameProduct)
  const length = productsList.length  
  const productTitle = useSelector(state => state.productTitle)
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)
  const productId = useSelector(state => state.productId)

  useEffect(() => {
    localStorage.getItem('productId')
    dispatch(setProductIdGlobal(productId))
  }, [productId])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleProducts = () => {
    const allProducts = products;
    dispatch(setNameProductGlobal(allProducts))    
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const animationInfo = document.querySelectorAll('.products__info-animation')
    gsap.fromTo(animationInfo, {
      opacity: 0,
      x: -20,
      duration: 1
    }, 
    {
      opacity: 1,
      x: 0,
      stagger: .1
    })
  },[productTitle])

  return (
    <div className={`products__principal ${ nav ? 'isActive' : ''}`}>
      <div className="products">
        <div className="products__title products__info-animation">
          {
            length==11 ? <span>Todos los productos</span> : 
            (
               <span>{productTitle}</span>
            )
          }
          <div className="products__info-movil products__info-animation">
            {length} Productos 
            {
              length == 11 ? '' : <div onClick={handleProducts}>Ver todos los productos</div>
            }
          </div>
          
        </div>        
        <div className="products__content">
          <div className="products__info">
            <span className='products__info-quantity products__info-animation'>{length} Productos</span>
            <div className='products__info-sub'>
              <div className="products__info-sub-content products__info-animation"><span onClick={handleProducts}>Todos los productos</span></div>
              <div className='products__info-sub-content products__info-animation'><span>Categoria</span></div>
              <div className='products__info-sub-content products__info-animation'><span>Tipos de cabello</span></div>              
            </div>
          </div>
          <div className="products__container-content">
            {
              length == 0 ? <span className='products__span'>
                No se encontraron productos relacionados 
               </span>
              : 
                ( <section className='products__container'>
                  {
                    productsList.map(product => <ProductCard product={product} key={product.id} />)
                  } 
                  </section>)
            }
           
          </div>
        </div>

      </div>
    </div>
  )
}

export default products

