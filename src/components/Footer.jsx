import '../styles/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="conclusion">
                <h1>All Iphone Store</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus soluta qui necessitatibus! Vitae qui error itaque deserunt autem accusantium</h2>

                <div className="bold">Follow Us</div>

                <div className="social_links">
                    <div className="social_links_item"></div>
                    <div className="social_links_item"></div>
                    <div className="social_links_item"></div>
                    <div className="social_links_item"></div>
                </div>
            </div>
            <div className="quicklinks">
                <h1>QUICK LINKS</h1>
                <div className="links">
                    <a href="/#landing">Home</a>
                    <a href="/#products">Products</a>
                    <a href="/#contactus">Contact</a>
                    <a href="/signup" >Sign Up</a>
                    <a href="/login" >Log In</a>
                    <a href="#">
                        Cart</a>
                </div>
            </div>
            <div className="getintouch">
                <h1>Get In Touch</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam rem hic quae in eos?</h2>

                <h4>alliphonestore@gmail.com</h4>
                <h4>+234 90 0000 0000</h4>
                <h4>Umuahia, Abia State, Nigeria.</h4>
            </div>

        </div>
    )
}

export default Footer
