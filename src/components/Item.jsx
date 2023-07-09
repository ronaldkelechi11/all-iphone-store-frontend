import { Link } from "react-router-dom";
import '../styles/Item.scss'

// Item function
// eslint-disable-next-line react/prop-types
export function Item({ item }) {
    return (
        <Link to={'/products/' + item._id} className="item" id="item" >
            <div className="img"><img src={item.images[0]} alt="" /></div>
            <div className="title">{item.name}</div>
            <div className="condition">{item.condition}</div>
            <div className="price">{item.price}</div>
        </Link>
    )
}