import { Item } from "./Products"

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