import { useState, useEffect } from 'react'
import '../styles/Products.scss'
import { ItemWrapper } from './ItemWrapper'
import { Link } from "react-router-dom";

const Products = () => {

    //UseState to update values
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Fetch function to get all available devices that returns only 8 products
        let http = new XMLHttpRequest();
        http.open('GET', '/src/__tests__/dummy.json');
        http.send();
        http.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                var products = JSON.parse(this.responseText)
                setProducts(products)
            }
        }
    }, [])



    return (
        <div className="products" id="products">
            <div className="header">Featured Products</div>
            <div className="header2">
                At the All Iphone Store we deliver the best of apple mobile devices straight to your doorstep.
            </div>
            <ItemWrapper items={products} />
            <Link to={'/products'} className="seemore">See more</Link>
        </div>
    )
}

export default Products
