import { useState, useEffect } from 'react'
import '../styles/Products.scss'
import { ItemWrapper } from './ItemWrapper'

const Products = () => {
    function seemore() {
        window.location = '/products'
    }
    //UseState to update values
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(this.responseText)
    }, [products])


    // Fetch function to get all available devices
    let http = new XMLHttpRequest();
    http.open('GET', '/src/__tests__/dummy.json');
    http.send();
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }

    return (
        <div className="products" id="products">
            <div className="header">Featured Products</div>
            <div className="header2">
                At the All Iphone Store we deliver the best of apple mobile devices straight to your doorstep.
            </div>
            <ItemWrapper items={products} />
            <div className="seemore" onClick={seemore} id="seemore">See more</div>
        </div>
    )
}

export default Products
