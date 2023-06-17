import '../styles/Signup.scss'

const Signup = () => {
    function goBack() {
        window.location.pathname = '/'
    }
    function goToLogin() {
        window.location.pathname = '/login'
    }

    return (
        <div className="signup">
            <div className="navbar" onClick={goBack}>
                <div className="img"></div>
            </div>
            <div className="flex">
                <div className="left">

                    <h1>Sign Up</h1>
                    <h4>Please Sign Up to enjoy using our services to the fullest</h4>

                    <form id="form" method="post" autoComplete="on">
                        <input type="text" name="name" id="name" placeholder="Full Name" minLength="2" maxLength="64"
                            required />
                        <input type="email" name="email" id="email" placeholder="Email" minLength="2" maxLength="64"
                            required />
                        <input type="tel" name="telephone" id="telephone" placeholder="Telephone" minLength="2"
                            maxLength="20" required />
                        <input type="text" name="address" id="address" placeholder="Home Address" minLength="2"
                            maxLength="64" required />
                        <input type="date" name="dateofbirth" id="dateofbirth" placeholder="Date of Birth (2004-09-07)"
                            minLength="2" maxLength="64" required />
                        <input type="password" name="password" id="password" placeholder="Password" minLength="8"
                            maxLength="64" required />
                        <input type="submit" value="Sign Up" id="submit_button" />
                    </form>

                    <p onClick={goToLogin}>Already have an account? <span>Login Here</span></p>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Signup
