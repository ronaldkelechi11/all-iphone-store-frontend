import Navbar from '../components/Navbar'
import Landing from "../components/Landing";
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Home = () => {
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

export default Home
