import { useState } from 'react'
import '../styles/Signup.scss'

const Signup = () => {
    const url = "http://127.0.0.1:3030/signup"

    // States for input elements
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const [dateofbirth, setDOB] = useState('')
    const [password, setPassword] = useState('')

    function goBack() {
        window.location.pathname = '/'
    }
    function goToLogin() {
        window.location.pathname = '/login'
    }
    function submit(e) {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        urlencoded.append("email", email);
        urlencoded.append("telephone", telephone);
        urlencoded.append("address", address);
        urlencoded.append("dateofbirth", dateofbirth);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            // headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => {
                if (response.status == 200) {
                    window.location.pathname = "/"
                }
                else if (response.status == 400) {
                    alert('User with that email has logged in before')
                }
            })
            .catch(error => { console.log('error', error), alert('Error connecting to Server') });
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

                    <form id="form" method="post" autoComplete="on" onSubmit={submit}>
                        <input type="text" placeholder="Full Name" minLength="2" maxLength="64"
                            required value={name} onChange={(e) => { setName(e.target.value) }} />

                        <input type="email" placeholder="Email" minLength="2" maxLength="64"
                            required value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        <input type="tel" placeholder="Telephone" minLength="2"
                            maxLength="20" required value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />

                        <input type="text" placeholder="Home Address" minLength="2"
                            maxLength="64" required value={address} onChange={(e) => { setAddress(e.target.value) }} />

                        <input type="date" placeholder="Date of Birth(2004-09-07)"
                            minLength="2" maxLength="64" required value={dateofbirth} onChange={(e) => { setDOB(e.target.value) }} />

                        <input type="password" placeholder="Password" minLength="8"
                            maxLength="64" required value={password} onChange={(e) => { setPassword(e.target.value) }} />

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
