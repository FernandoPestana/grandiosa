import React, { useEffect, useRef, useState } from 'react'
import './styles/Search.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchGlobal } from '../store/slices/search.slice';
import { setProductsGlobal } from '../store/slices/products.slice';
import { setNameProductGlobal } from '../store/slices/nameProduct.slice';
import { Navigate, createBrowserRouter, unstable_HistoryRouter, useNavigate } from 'react-router-dom';

const Search = () => {

  const [ input, setInput ] = useState(false);
  const [ inputValue, setInputValue ] = useState(''); 

  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const products = useSelector(state => state.products);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault()
    const newValue = e.target.value;
    setInputValue(newValue);           
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchGlobal(false))
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  const handleClickOutside = (e) => {
    if(!searchRef.current.contains(e.target))
    {
      dispatch(setSearchGlobal(false))
      
    }
  }

  useEffect(() => {
    const newProducts = !inputValue ? products : products.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()))    
    dispatch(setNameProductGlobal(newProducts))
    console.log(newProducts)
  }, [inputValue, products,])

  const toggleSearchClose = () => {
    dispatch(setSearchGlobal(false))
    setInput(false)
    navigate('/') 
    setInputValue('')
  }
  
  const toggleInput = () => {
    setInput(true)
    navigate('/products')
  }

  return (    
      <div ref={searchRef} className={`search__container ${ search ? 'isActive' : ''}`}>                        
          <div className="search__container-wrapper">
              <h4 className="search__title">¿Qué estás buscando?
                  <div className='search__icon-close' onClick={toggleSearchClose}>
                      <em className='bx bx-x'></em> 
                  </div>
              </h4>
              <form className='search__form' method='get' action="/search" onSubmit={handleSubmit}>
                  <em className='bx bx-search'></em>
                  <input onClick={toggleInput} value={inputValue} onChange={handleChange} className={`search__form-input ${ input ? 'isActive' : ''}`} type='search' placeholder='shampoo...' autoComplete='off' />
                  <label className='search__form-lbl'></label>
              </form>                    
          </div>                
    </div>
  )
}

export default Search
