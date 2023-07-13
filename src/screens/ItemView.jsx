import { useParams } from 'react-router-dom';
import '../styles/ItemView.scss'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';

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
        <>
            <Navbar />
            <div className="itemView">
                <div className="left">
                    <div className="productName">{product.name}</div>

                    <div className="productImageRow">
                        {product.images.map(image => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <img src={image} alt="" />
                            )
                        })}
                    </div>

                    <div className="addToCart">Add to Cart</div>

                    <div className="description">
                        <p>Description</p>

                        <table>
                            <div className="tablerow">
                                <h1>Colour:</h1>
                                <h1>{product.description.color}</h1>
                            </div>
                            <div className="tablerow">
                                <h1>RAM:</h1>
                                <h1>{product.description.RAM}</h1>
                            </div>
                            <div className="tablerow">
                                <h1>Storage Size:</h1>
                                <h1>{product.description.storageSize}</h1>
                            </div>
                            <div className="tablerow">
                                <h1>Issues:</h1>
                                <h1>{product.description.issues}</h1>
                            </div>
                        </table>
                    </div>
                </div>
                <div className="right">
                    <div className="header">Similar Products</div>
                </div>
            </div>
        </>
    )
}


export default ItemView
