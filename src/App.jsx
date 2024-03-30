import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './components/itemCount/ItemCount'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/PageNotFound'
import './App.css'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Nuestras delicias' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer title='Tienda' />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<h1>Carrito</h1>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}


export default App
