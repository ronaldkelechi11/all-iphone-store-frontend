import '../styles/Navbar.scss'

const Navbar = () => {
    const LOCAL_STORAGE_AUTH = localStorage.getItem('alliphonestore.isSignedIn')

    function logout() {
        localStorage.setItem('alliphonestore.isSignedIn', '')
    }


    return (
        <div className='navbar'>
            <div className="logo">ALL IPHONE STORE</div>

            <div className="links">
                <a href="/#landing">Home</a>
                <a href="/#products">Products</a>
                <a href="/#contactus">Contact</a>
                <a href="/signup" className={LOCAL_STORAGE_AUTH ? 'inactive' : ''} id="signup-button">Sign Up</a>
                <a href="/login" className={LOCAL_STORAGE_AUTH ? 'inactive' : ''} id="login-button">Log In</a>
                <a href="/login" className={LOCAL_STORAGE_AUTH ? '' : 'inactive'} onClick={logout} id="login-button">Account</a>
                <a href="#" id="account-button">Cart</a>
            </div>

        </div>
    )
}

export default Navbar
