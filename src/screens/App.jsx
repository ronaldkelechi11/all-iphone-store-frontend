import '../styles/App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'
import Landing from "../components/Landing";
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Signup from './Signup';
import LogIn from './Login';
import ProductsView from './ProductsView'
import Admin from './Admin.jsx';

function App() {
  function Home() {
    <>
      <Navbar />
      <Landing />
      <Products />
      <Contact />
      <Footer />
    </>
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route location="/"> <Home /></Route>
          <Route location="/signup"> <Signup /></Route>
          <Route location="/login"> <LogIn /></Route>
          <Route location="/products"> <ProductsView /></Route>
          <Route location="/admin"> <Admin /></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
