import '../styles/Products.scss'
import { ItemWrapper } from './ItemWrapper'

const Products = () => {
    function seemore() {
        window.location = '/products'
    }

    // Fetch function to get all available devices

    return (
        <div className="products" id="products">
            <div className="header">Featured Products</div>
            <div className="header2">
                At the All Iphone Store we deliver the best of apple mobile devices straight to your doorstep.
            </div>

            <ItemWrapper />
            <div className="seemore" onClick={seemore} id="seemore">See more</div>
        </div>
    )
}

export default Products
