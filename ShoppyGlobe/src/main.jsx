// Importing all the routes and react packages
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux" 
import store from "./Redux/Store.js";
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
import Cart from '../components/Cart.jsx'

// Rendering the routes and store
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
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
      <Route path="/Cart" element={<Cart/>}/>
      </Route>
       <Route path="*" element={<NotFound />} />
      </Routes>
   
    </HashRouter>
    </Provider>
  </StrictMode>,
)
