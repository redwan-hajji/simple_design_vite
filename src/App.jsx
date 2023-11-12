import { useState } from 'react'
import Nav from './components/nav'
import Home from './components/Home'
import ProductsPage from './pages/ProductsPage'
import HomePage from './pages/HomePage'
import {HashRouter as Router,Routes ,Route} from 'react-router-dom'



import './App.css'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'

function App() {

  let [cart,setCart]=useState([])

  return (
<>
<Router>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path="/ProductsPage" element={<ProductsPage/>} cart={cart} setCart={setCart}/>
    {/* <Route path='/CartPage' element={<CartPage/>} cart={cart} setCart={setCart}/> */}
    <Route path='/ContactPage' element={<ContactPage/>}/>
    <Route path='/AboutPage' element={<AboutPage/>}/>
 </Routes>
</Router>
</>
  )
}

export default App
