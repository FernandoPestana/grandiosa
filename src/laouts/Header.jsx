import React, { useEffect, useState } from 'react'
import './styles/Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMinicartGlobal } from '../store/slices/minicart.slice'
import { setSearchGlobal } from '../store/slices/search.slice'
import { setNotiGlobal } from '../store/slices/noti.slice'
import { setNavGlobal } from '../store/slices/nav.slice'
import { gsap } from 'gsap'


const Header = ({filter1, filter2, filter3, subFilter1, subFilter}) => {

  const [ tier, setTier ] = useState(false)
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const toggleTierEnter = () => {
    setTier(true)
  }

  const toggleTierLeave = () => {
    setTier(false)
  }

  const togleMenuNav = () => {    
    dispatch(setNavGlobal(true))
  }

  const toggleSearchOpen = () => {
    dispatch(setSearchGlobal(true))
  }

  const toggleMinicartOpen = () => {
    dispatch(setMinicartGlobal(true)); 
  }

  const noti = useSelector(state => state.noti)

  useEffect(() => {
    dispatch(setNotiGlobal(cart.length === 0 ? false : true))
  }, [cart])

   useEffect(() => {
    const head = document.querySelector('.header');
    gsap.fromTo(head, {opacity: 0},
        {opacity:1 , duration: .8})
  }, []) 

  const count = cart.length


    const handleClickFilter1 = (e) => {
        e.preventDefault()
    filter1();
    setTier(false);
  };

  


  return (        
        <header className='content'>                                
            <div className="header">
                <div onClick={togleMenuNav}  className="header__button-container">
                    <button className='header__button'>
                        <em className='bx bx-menu-alt-left'></em>
                    </button> 
                </div>
                <Link to='/' className='header__img-content'><img className='header__img' width="230" height="58" src="https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-230x58.png"  alt="Grandiosa | Tienda Oficial" decoding="async" srcSet="https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-230x58.png 230w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-300x76.png 300w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-1024x259.png 1024w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-768x194.png 768w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-1320x334.png 1320w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-600x152.png 600w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA.png 1408w" sizes="(max-width: 230px) 100vw, 230px" /></Link>
                <nav className='nav'>
                    <ul className="nav__tier-1">
                        <li className="nav__item">
                            <NavLink className='nav__link-1' to='/' ><span>HOME</span></NavLink>
                        </li>
                        <li  className="nav__item">
                            <div onClick={handleClickFilter1} onMouseLeave={toggleTierLeave} onMouseEnter={toggleTierEnter}  className='nav__link-1'><span>CAPILAR</span>                                
                                <div className={`nav__tier-2-container ${ tier ? 'isActive' : ''}`}>
                                    <div className='nav__tier-2-content'>
                                        <ul className='nav__tier-2'>
                                            <li className="nav__item-1"><span onClick={subFilter} className="nav__link-2">Shampoo</span></li>
                                            <li className="nav__item-1"><span onClick={subFilter1} className="nav__link-2">Serum</span></li>                                    
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    
                        <li className="nav__item">
                            <span onClick={filter2} className='nav__link-1'><span>CORPORAL</span></span>                        
                        </li>

                        <li className="nav__item">
                            <span onClick={filter3} className='nav__link-1'><span>KITS</span></span>                        
                        </li>
                    </ul>
                </nav>
                
                <div className='header__utilities'>
                    <div className="header__utilities-container">
                        <span className='search__icon'>
                            <em onClick={toggleSearchOpen} className='bx bx-search'></em>
                        </span>
                        <div className="minicart__button">
                            <div className="minicart__icon">
                                <em onClick={toggleMinicartOpen} className='bx bx-shopping-bag'></em>
                                <span className={`minicart__count ${ noti ? 'isActive' : ''}`}>{count}</span>
                            </div>                        
                        </div> 
                    </div>               
                </div>
                
            </div>
        </header>
  )
}


export default Header
