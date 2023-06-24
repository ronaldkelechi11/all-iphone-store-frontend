import '../styles/App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar'
import Landing from "../components/Landing";
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Signup from './Signup';
import LogIn from './Login';
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
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/"> <Home /></Route>
          <Route exact path="/signup"> <Signup /></Route>
          <Route exact path="/login"> <LogIn /></Route>
          <Route exact path="/products"> <ProductsView /></Route>
          <Route exact path="/admin"> <Admin /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
