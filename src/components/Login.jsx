import '../styles/Login.scss'

const Login = () => {
    function goBack() {
        window.location.pathname = '/'
    }
    function goToSignup() {
        window.location.pathname = '/signup'
    }

    function submitForm(e) {
        e.preventDefault()
        alert("Form Submitted")
    }

    return (
        <div className="login">
            <div className="navbar" id="navbar" onClick={goBack}>
                X
            </div>
            <div className="flex">
                <div className="left">
                    <h1>Login</h1>
                    <h4>Login to access our services on this device</h4>

                    <form method="post" id="form" onSubmit={submitForm}>
                        <input type="email" name="email" id="email" placeholder="Email" required min="2" max="64" />
                        <input type="password" name="password" id="password" placeholder="Password" required min="8"
                            max="64" />
                        <input type="submit" value="Sign Up" id="submit_button" />
                    </form>

                    <p onClick={goToSignup}>Don&apos;t have an account? <span>Register Here</span></p>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Login
