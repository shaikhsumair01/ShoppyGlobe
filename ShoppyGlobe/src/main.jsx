// Importing all the routes and react packages
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux" 
import store from "./Redux/Store.js";
import { HashRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Spinner from '../components/Spinner.jsx';
// Using lazy loading
const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('../components/Home.jsx'));
const Men = lazy(() => import('../components/Men.jsx'));
const Women = lazy(() => import('../components/Women.jsx'));
const Accessory = lazy(() => import('../components/accessory.jsx'));
const Electronics = lazy(() => import('../components/Electronics.jsx'));
const ProductDetails = lazy(() => import('../components/ProductDetails.jsx'));
const SearchResults = lazy(() => import('../components/SearchResult.jsx'));
const Cart = lazy(() => import('../components/Cart.jsx'));
const NotFound = lazy(() => import('../components/NotFound.jsx'));
const Checkout = lazy(()=> import('../components/CheckOut.jsx'))


// Rendering the routes and store
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <HashRouter>
      <Suspense fallback={<Spinner/>}>

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
      <Route path="/CheckOut" element={<Checkout/>}/>
       <Route path="*" element={<NotFound />} />
      </Routes>
   </Suspense>
    </HashRouter>
    </Provider>
  </StrictMode>,
)
