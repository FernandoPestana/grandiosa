import { useEffect, useState } from "react"
import './App.scss'
import data from "./data/data"
import Header from "./laouts/Header"
import Home from "./pages/Home"
import Footer from "./laouts/Footer"
import { Route, Routes, useNavigate } from "react-router-dom"
import ProductId from "./pages/ProductId"
import Products from './pages/Products'
import { setNameProductGlobal } from "./store/slices/nameProduct.slice"
import { useDispatch, useSelector } from "react-redux"
import Minicart from "./components/Minicart"
import Search from "./components/Search"
import { setProductsGlobal } from "./store/slices/products.slice"
import { setProductTitleGlobal } from "./store/slices/productTitle.slice"
import Nav from "./components/Nav"
import { setNavGlobal } from "./store/slices/nav.slice"
import Checkout from "./pages/Checkout"



function App() {  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [ all, setAll ] = useState(false)
  
  


  useEffect(() => {       
   dispatch(setNameProductGlobal(data))    
   dispatch(setProductsGlobal(data))    
  },[])                      
   
   const filter1 = () => {
    const filteredData = data.filter(product => product.category === 'capilar')
    dispatch(setNameProductGlobal(filteredData));
    dispatch(setProductTitleGlobal('Capilar'))
    dispatch(setNavGlobal(false))
    navigate(`/products`)
  }
  
  const subFilter = (e) => {
    e.stopPropagation()
    const filteredData = data.filter(product => product.subcategory === 'shampoo')
    dispatch(setNameProductGlobal(filteredData));
    dispatch(setProductTitleGlobal('Capilar'))
    dispatch(setNavGlobal(false))
    navigate(`/products`)
  }
  const subFilter1 = (e) => {
    e.stopPropagation()
    const filteredData = data.filter(product => product.subcategory === 'serum')
    dispatch(setNameProductGlobal(filteredData));
    dispatch(setProductTitleGlobal('Capilar'))
    dispatch(setNavGlobal(false))
    navigate(`/products`)
  }

  const filter2 = () => {
    const filteredData = data.filter(product => product.category === 'corporal')
    dispatch(setNameProductGlobal(filteredData));
    dispatch(setProductTitleGlobal('Corporal'))
    dispatch(setNavGlobal(false))
    navigate(`/products`)
  }

  const filter3 = () => {
    const filteredData = data.filter(product => product.category === 'kits')
    dispatch(setNameProductGlobal(filteredData));
    dispatch(setProductTitleGlobal('Kits'))
    dispatch(setNavGlobal(false))
    navigate(`/products`)
  } 

  return (
    <div className={`app ${ all ? 'isActive' : ''}`}>
      <div className="add">
        <span>Ahora todos tus envíos son gratis. Aplican T&C</span>
      </div>
      <Header filter1={filter1} filter2={filter2} filter3={filter3} subFilter1={subFilter1} subFilter={subFilter}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductId />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element= {<Checkout />} />
      </Routes>   
      <Minicart />  
      <Search />  
      <a className="whatsapp__btn" href="https://api.whatsapp.com/send?phone=3187169692" rel="noreferrer noopener" target="_blank">
        <em className='bx bxl-whatsapp'></em>
      </a>
      <Nav filter1={filter1} filter2={filter2} filter3={filter3} subFilter1={subFilter1} subFilter={subFilter}/>
      <Footer />
      <div className="footer__copyright">
            <span>© 2023 Grandiosa Natural</span>
      </div>
    </div>
  )
}

export default App
