import '../styles/Products.scss'

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

            <div className="itemWrapper">
                <div className="item" id="item">
                    <div className="img"><img src="/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
                <div className="item" id="item">
                    <div className="img"><img src="/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
                <div className="item" id="item">
                    <div className="img"><img src="/src/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
                <div className="item" id="item">
                    <div className="img"><img src="/src/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
                <div className="item" id="item">
                    <div className="img"><img src="/src/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
                <div className="item" id="item">
                    <div className="img"><img src="/src/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
                <div className="item" id="item">
                    <div className="img"><img src="/src/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
                <div className="item" id="item">
                    <div className="img"><img src="/src/assets/images/iphone11_1.jfif" alt="" /></div>
                    <div className="title">Iphone X</div>
                    <div className="condition">New</div>
                    <div className="price">N160,000</div>
                </div>
            </div>
            <div className="seemore" onClick={seemore} id="seemore">See more</div>
        </div>
    )
}

// Item Wrapper
export function ItemWrapper([items]) {
    return (
        <div className="itemWrapper">
            {items.map(item => {
                <Item key={item.id} item={item} />
            })}
        </div>
    )
}

// Item function
export function Item({ key, item }) {
    return (
        <div className="item" id="item">
            <div className="img"><img src="/src/assets/images/iphone11_1.jfif" alt="" /></div>
            <div className="title">{item.name}</div>
            <div className="condition">{item.condition}</div>
            <div className="price">{item.price}</div>
        </div>
    )
}


export default Products
