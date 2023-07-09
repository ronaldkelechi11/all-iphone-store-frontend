import { useParams } from 'react-router-dom';
import '../styles/ItemView.scss'
import { useState, useEffect } from "react";

const ItemView = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        let http = new XMLHttpRequest();
        //Fetch based on  the id from the array
        http.open('GET', '/src/__tests__/dummy.json');
        http.send();
        http.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText.includes(id));
            }
        }
    }, [])


    return (
        <div className="itemView">
        </div>
    )
}

export default ItemView
