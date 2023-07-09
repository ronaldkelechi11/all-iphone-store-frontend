import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/Login.scss'
import { ReactDOM, useState } from "react";


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const url = import.meta.env.VITE_APIURL + "/login"
    const LOCAL_STORAGE_AUTH = 'alliphonestore.isSignedIn'
    const LOCAL_STORAGE_ADMIN = 'alliphonestore.isAdmin'

    function goBack() {
        window.location.pathname = '/'
    }

    function submitForm(e) {
        e.preventDefault()

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
                    navigate("/")
                    localStorage.setItem(LOCAL_STORAGE_AUTH, true);
                }
                if (response.status == 300) {
                    navigate("/admin")
                    localStorage.setItem(LOCAL_STORAGE_ADMIN, true);
                }
                else if (response.status == 400) {
                    alert("User with that Email or Password doesn't exist try again or Try signing up")
                }
            })
            .catch(() => { alert('You need an Internet connection to connect to Login') });
    }

    return (
        <div className="login">
            <div className="navbar" id="navbar" onClick={goBack}>

            </div>
            <div className="flex">
                <div className="left">
                    <h1>Login</h1>
                    <h4>Login to access our services on this device</h4>

                    <form method="post" onSubmit={submitForm}>
                        <input type="email" placeholder="Email" required min="2" max="64" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" required min="8"
                            max="64" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="submit" value="Sign Up" id="submit_button" />
                    </form>

                    <Link to={'/signup'}>Don&apos;t have an account? <span>Register Here</span></Link>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Login
