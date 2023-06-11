import React, { useEffect, useRef, useState } from 'react'
import './styles/Nav.scss'
import { NavLink, useFetcher } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setNavGlobal } from '../store/slices/nav.slice'
import { gsap } from 'gsap'


const Nav = ({ filter1, filter2, filter3, subFilter, subFilter1}) => {

    const nav = useSelector(state => state.nav)
    const dispatch = useDispatch();
    const [ tier, setTier ] = useState(false)
    const navRef = useRef(null);

    useEffect(() => {
      const navTier = document.querySelectorAll('.navbar__an');     
       if(nav===true)
       {
          gsap.fromTo(navTier, {
            opacity: 0, 
            y: 15
          },
          {
            opacity: 1, 
            y: 0, 
            duration: .4, 
            delay: .5, 
            stagger: .1}) 
       }        
    }, [nav===true])

    const handlerTier2 = () => {
        setTier(!tier)
    }

    const toggleNavClose = () => {
      setTier(false)
      dispatch(setNavGlobal(false))
    }

    const handleClickOutside = (e) => {
        if(!navRef.current.contains(e.target)  && navRef.current)
        {
          dispatch(setNavGlobal(false)) 
          setTier(false)
        }        
      }

      useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        
      }, [])

    const handleGoHome = () => {
        dispatch(setNavGlobal(false))
        setTier(false)
    }
    


  return (
    <div ref={navRef} className={`navbar__container ${ nav ? 'isActive' : ''}`}>
      <nav className='navbar'>
        <div onClick={toggleNavClose} className="navbar__icon-container">
            <em className='navbar__icon bx bx-x'></em> 
        </div>
        <ul className='navbar__tier'>
            <li className='navbar__item navbar__an'>
                <NavLink className='navbar__link-1' to='/' ><span onClick={handleGoHome}>HOME</span></NavLink>
            </li>
            <li className='navbar__item navbar__an'>
                <span onClick={filter1} className='navbar__link-1'>CAPILAR</span> 
                <div onClick={handlerTier2}  className="navbar__icon2-container">
                    <em className={`navbar__icon2 bx bx-chevron-down ${ tier ? 'isActive' : ''}`}></em>         
                </div>
                <div className={`navbar__tier-2-container ${ tier ? 'isActive' : ''}`}>
                    <ul className='navbar__tier-2'>
                        <li className='navbar__item-2'><span onClick={subFilter}>Shampoo</span></li>
                        <li className='navbar__item-2'><span onClick={subFilter1}>Serum</span></li>
                    </ul>
                </div>              
            </li>
            <li className='navbar__item navbar__an'>
                <span onClick={filter2} className='navbar__link-1'>CORPORAL</span>                        
            </li>
            <li className='navbar__item navbar__an'>
                <span onClick={filter3} className='navbar__link-1'>KITS</span>                        
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
