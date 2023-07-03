import '../styles/App.scss'

import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Signup from './Signup';
import LogIn from './Login';
import ProductsView from './ProductsView'
import Admin from './Admin.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
