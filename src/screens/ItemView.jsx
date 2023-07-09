import { useParams } from 'react-router-dom';
import '../styles/ItemView.scss'
import { useState, useEffect } from "react";

const ItemView = () => {
    const [product, setProduct] = useState({
        "_id": "1",
        "images": [
            "/src/assets/images/iphone11_1.jfif",
            "/src/assets/images/iphone11_1.jfif",
            "/src/assets/images/iphone11_1.jfif"
        ],
        "name": "Placeholder",
        "condition": "Placeholder",
        "price": "N0",
        "description": {
            "color": "Black",
            "RAM": "3GB",
            "storageSize": "Placeholder",
            "issues": "Nil"
        }
    })
    const { id } = useParams()

    useEffect(() => {
        let http = new XMLHttpRequest();
        //Fetch based on  the id from the array
        http.open('GET', '/src/__tests__/dummy.json');
        http.send();
        http.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("Succesfully");
                setProduct(JSON.parse(this.responseText).at(id - 1))
            }
        }
    }, [])

    return (
        <div className="itemView">
            <div className="left">
                <div className="productName">{product.name}</div>

                <div className="productImageRow">
                    {product.images.map(image => {
                        console.log(image);
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <img src={image} alt="" />
                        )
                    })}
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}


export default ItemView
