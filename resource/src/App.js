import React from 'react'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products.jsx'
import Newfile from './pages/Newfile.jsx'
import { ProductProvider } from './context/ProductProvider.jsx'
import { CartProvider } from 'react-use-cart'
import CartPage from './pages/CartPage.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Pages from './pages/Pages.jsx'

const App = () => {
    return (
      <BrowserRouter>
      <CartProvider>
      <ProductProvider>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/home' element={<Header />}></Route>
        <Route path='/shop' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/pages' element={<Pages />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/shop/:id' element={<Newfile />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
      </ProductProvider>
      </CartProvider>
      </BrowserRouter>
    )
}

export default App
