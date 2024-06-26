import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './components/itemCount/ItemCount'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/PageNotFound'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import './App.css'
import Checkout from './components/checkout/Checkout'

function App() {

  return (
    <ChakraProvider>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Nuestras delicias' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer title='Tienda' />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}


export default App
