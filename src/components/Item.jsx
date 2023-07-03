
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