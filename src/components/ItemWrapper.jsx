import { Item } from "./Item"
import '../styles/ItemWrapper.scss'

// Item Wrapper PRODUCTION
export function ItemWrapper({ items }) {
    return (
        <div className="itemWrapper">
            {
                items.map(item => {
                    return (<Item key={item._id} item={item} />)
                })
            }
        </div>
    )
}
