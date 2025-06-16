import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from '../components/Home.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Men from '../components/Men.jsx'
import Women from '../components/Women.jsx'
import Accessory from '../components/accessory.jsx'
import Electronics from '../components/Electronics.jsx'
import ProductDetails from '../components/ProductDetails.jsx'
import NotFound from '../components/NotFound.jsx'
import SearchResults from '../components/SearchResult.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
      <Route path='/' element={<App/>}>
      <Route index element ={<Home/>} />
      <Route path="/search/:query" element={<SearchResults />} />
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Electronics' element={<Electronics/>}/>
      <Route path='/Accessory' element={<Accessory/>}/>
      <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
      </Route>
       <Route path="*" element={<NotFound />} />
      </Routes>
   
    </HashRouter>
  </StrictMode>,
)
