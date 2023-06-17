import '../styles/Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">All Iphone Store</div>

            <div className="links">
                <a href="#landing">Home</a>
                <a href="#products">Products</a>
                <a href="#contactus">Contact</a>
                <a href="/signup" className="signup-button" id="signup-button">Sign Up</a>
                <a href="/login" className="login-button" id="login-button">Log In</a>
                <a href="#" className="account-button" id="account-button">Account</a>
            </div>

        </div>
    )
}

export default Navbar
