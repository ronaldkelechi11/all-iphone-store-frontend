import '../styles/App.scss'

import Navbar from '../components/Navbar'
import Landing from "../components/Landing";
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
    return null
  }
  function Login() {
    return null
  }
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
