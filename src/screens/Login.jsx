import '../styles/Login.scss'
import { useState } from "react";
// Find a way to make it you dont have to set the url everytime
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const url = import.meta.env.VITE_APIURL + "/login"
    const LOCAL_STORAGE_AUTH = 'alliphonestore.isSignedIn'

    function goBack() {
        window.location.pathname = '/'
    }
    function goToSignup() {
        window.location.pathname = '/signup'
    }

    function submitForm(e) {
        e.preventDefault()
        console.log(email, password);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    window.location = "/"
                    localStorage.setItem(LOCAL_STORAGE_AUTH, true);
                }
                if (response.status == 300) {
                    window.location = "/admin"
                }
                else if (response.status == 400) {
                    alert("User with that Email or Password doesn't exist try again or Try signing up")
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="login">
            <div className="navbar" id="navbar" onClick={goBack}>

            </div>
            <div className="flex">
                <div className="left">
                    <h1>Login</h1>
                    <h4>Login to access our services on this device</h4>

                    <form method="post" id="form" onSubmit={submitForm}>
                        <input type="email" placeholder="Email" required min="2" max="64" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" required min="8"
                            max="64" value={password} onChange={(e) => setPassword(e.target.value)} />
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
