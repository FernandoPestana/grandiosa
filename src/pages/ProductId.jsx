import React, { useEffect, useState } from 'react'
import './styles/ProductId.scss'
import ProductInfo from '../components/ProductInfo'
import { useSelector } from 'react-redux'
import SimilarProducts from '../components/SimilarProducts'

const ProductId = () => {  

  const productInfo = useSelector(state => state.productId)
  const productId = useSelector(state => state.productId);
  const Allproducts = useSelector(state => state.products);
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    const filters = Allproducts.filter(product => product.category === productId.category);
    const filtered = filters.filter(filter => filter.id !== productId.id);
    setProductsFilter(filtered);
    console.log(filtered);
  }, [productId, Allproducts]);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [productInfo])

  

  return (
    <main className="productId">
      <ProductInfo />
      <SimilarProducts productFilter={productsFilter}/>
    </main>
  )
}

export default ProductId
