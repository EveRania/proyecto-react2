import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Tienda' />} />

        </Routes>
        {/* <footer></footer> */}
      </BrowserRouter>
    </ChakraProvider>
  )
}

// {/* <ItemListContainer title='Tienda' /> */}
export default App
