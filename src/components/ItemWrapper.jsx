import { Item } from "./Item"

// Item Wrapper PRODUCTION
// export function ItemWrapper([items]) {
//     return (
//         <div className="itemWrapper">
//             {items.map(item => {
//                 <Item key={item.id} item={item} />
//             })}
//         </div>
//     )
// }

//ITEM WRAPPER TESTS
export function ItemWrapper() {
    return (
        <div className="itemWrapper">
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
    )
}