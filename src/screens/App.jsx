import '../styles/App.scss'
import { Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar'
import Landing from "../components/Landing";
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Signup from '../screens/Signup';
import LogIn from '../screens/Login';
import ProductsView from './ProductsView';
import Admin from './Admin';

function App() {

  function Home() {
    return (
      <>
        <Navbar />
        <Landing />
        <Products />
        <Contact />
        <Footer />
      </>
    )
  }

  return (
    <>
      <div className="app">
        <Switch>
          <Route exact path="/" > <Home /></Route>
          <Route path="/signup"> <Signup /></Route>
          <Route path="/login"> <LogIn /></Route>
          <Route path="/products"> <ProductsView /></Route>
          <Route path="/admin"> <Admin /></Route>
        </Switch>
      </div>
    </>
  )
}

export default App
