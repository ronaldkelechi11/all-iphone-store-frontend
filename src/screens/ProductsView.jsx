import "../styles/ProductsView.scss"
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import { ItemWrapper } from "../components/ItemWrapper"


const ProductsView = () => {
    //UseState to update values
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Fetch function to get all available devices
        let http = new XMLHttpRequest();
        http.open('GET', '/src/__tests__/dummy.json');
        http.send();
        http.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                setProducts(JSON.parse(this.responseText))
            }
        }
    }, [])

    function filterSearch() {
        //Recieves the search word and finds iphone name based on that 
        //search word
    }


    return (
        <div className="productsview">
            <Navbar />

            <div className="searchBar">
                <div className="searchBarBar">
                    <input type="search" name="search" id="search" className="search" placeholder="Search" />
                    <button onClick={filterSearch} className="searchButton">Search</button>
                </div>
            </div>

            <ItemWrapper items={products} />
        </div>
    )
}

export default ProductsView
