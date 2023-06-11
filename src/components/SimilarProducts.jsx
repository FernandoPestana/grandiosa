import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import './styles/SimilarProducts.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const SimilarProducts = ({ productFilter }) => {
    
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const animationTitle = document.querySelectorAll('.product__titles');
        gsap.fromTo(animationTitle, {
            opacity: 0,
            y: 15,
            duration: 1
        },
        {
            opacity: 1,
            y: 0,
            stagger: .5,
            scrollTrigger: {
                trigger: animationTitle,
                start: 'top 80%'
            }
        })

    }, [])

  return (
    <section className="similarProducts">
       <div className="similarProducts__big">
            <div className="similarProducts__title">
                <span><span className='product__titles'>Productos</span> <span className='product__titles'>similares</span></span>
            </div>
                <div className="similarProducts__content">
                    <div className="similarProducts__container">
                        {
                            productFilter.map(productFilter => <ProductCard product={productFilter} key={productFilter.id} />)
                        }
                    </div>
                </div>
        </div>
    </section>
  )
}

export default SimilarProducts
