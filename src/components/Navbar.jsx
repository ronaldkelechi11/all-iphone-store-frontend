import '../styles/Navbar.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
    const LOCAL_STORAGE_AUTH = localStorage.getItem('alliphonestore.isSignedIn')

    function logout() {
        localStorage.setItem('alliphonestore.isSignedIn', '')
    }


    return (
        <div className='navbar'>
            <a href="/" className="logo">ALL IPHONE STORE</a>

            <div className="links">
                <a href="/#landing">Home</a>
                <a href="/#products">Products</a>
                <a href="/#contactus">Contact</a>
                <Link to="/signup" className={LOCAL_STORAGE_AUTH ? 'inactive' : ''} id="signup-button">Sign Up</Link>
                <Link to="/login" className={LOCAL_STORAGE_AUTH ? 'inactive' : ''} id="login-button">Log In</Link>
                <a href="/" className={LOCAL_STORAGE_AUTH ? '' : 'inactive'} onClick={logout} id="login-button">Account</a>
                <Link to="#" id="account-button">Cart</Link>
            </div>

        </div>
    )
}

export default Navbar
