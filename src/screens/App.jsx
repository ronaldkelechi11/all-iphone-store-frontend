import '../styles/App.scss'

import Navbar from '../components/Navbar'
import Landing from "../components/Landing";
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Signup from '../components/Signup';
import LogIn from '../components/Login';
import ProductsView from './ProductsView';
import Admin from './Admin';

function App() {
  let Component;

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
  function SignUp() {
    return (
      <>
        <Signup />
      </>
    )
  }

  function Login() {
    return (
      <>
        <LogIn />
      </>
    )
  }

  function Productview() {
    return (
      <>
        <ProductsView />
      </>
    )
  }

  function AdminView() {
    return (
      <Admin />
    )
  }

  // My own router
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/signup":
      Component = SignUp
      break;
    case "/login":
      Component = Login
      break;
    case "/products":
      Component = Productview
      break;
    case "/admin":
      Component = AdminView
      break;
    default:
      Component = Home
  }


  return (
    <>
      <div className="app">
        <Component />
      </div>
    </>
  )
}

export default App
