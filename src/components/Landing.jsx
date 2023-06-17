import '../styles/Landing.scss'
const Landing = () => {
    return (
        <div className='landing'>
            <div className="tint">
                <div className="center">
                    <div className="largeText">10% off for all first time Shoppers.</div>
                    <div className="mediumText">Your one stop shop for Iphones</div>

                    <div className="searchBar">
                        <input type="search" name="search" id="search" className="search" placeholder="Search" />
                        <button className="searchButton">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
