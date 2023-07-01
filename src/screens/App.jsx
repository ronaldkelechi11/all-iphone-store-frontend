import '../styles/App.scss'

import { BrowserRouter, Router, Route } from "react-router-dom";

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
        <Router>
          <Route path="/"> <Home /></Route>
          <Route exact path="/signup"> <Signup /></Route>
          <Route exact path="/login"> <LogIn /></Route>
          <Route exact path="/products"> <ProductsView /></Route>
          <Route exact path="/admin"> <Admin /></Route>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
