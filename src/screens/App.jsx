import '../styles/App.scss'

import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Signup from './Signup';
import LogIn from './Login';
import ProductsView from './ProductsView'
import Admin from './Admin.jsx';
import ItemView from './ItemView';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/products'>
          <Route index element={<ProductsView />} />
          <Route path=':id' element={<ItemView />} />
        </Route>
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
