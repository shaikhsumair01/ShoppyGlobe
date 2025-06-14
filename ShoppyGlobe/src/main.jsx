import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from '../components/Home.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Shop from '../components/Shop.jsx'
import ProductDetails from '../components/ProductDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
      <Route path='/' element={<App/>}>
      <Route index element ={<Home/>} />
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
      </Route>
      </Routes>
   
    </HashRouter>
  </StrictMode>,
)
