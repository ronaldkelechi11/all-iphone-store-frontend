import '../styles/Contact.scss';

const Contact = () => {
    return (
        <div className="contactus" id="contactus">
            <h1>Contact Us</h1>
            <div className="flex">
                <div className="form">
                    <form method="post">
                        <input type="text" name="name" id="name" className="name" placeholder="Full Name" />
                        <input type="email" name="email" id="email" className="name" placeholder="Email Address" />
                        <input type="number" name="number" id="number" className="number" placeholder="Phone Number" />
                        <input type="text" name="message" id="message" className="message" placeholder="Message" />
                        <input type="button" value="Submit" className="submit-button" />
                    </form>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.bing.com/maps?q=Umuahia&satid=id.sid%3Ae57ab116-340c-5fb9-8d3a-a83700499230&cp=5.514076%7E7.495711&lvl=13.5"
                        frameBorder="1" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
