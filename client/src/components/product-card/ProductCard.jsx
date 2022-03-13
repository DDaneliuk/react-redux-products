import React, {useState} from "react";
import {Link} from "react-router-dom";
// style
import './ProductCard.css'
// component
import DeleteItem from "../modal/DeleteItem"

const ProductCard = ({product}) => {
    const [showDeleteModal, IsShowDeleteModal] = useState(false)
    const handleModal = () => {
        IsShowDeleteModal(!showDeleteModal)
    }
    return (
        <div className="productCard">
            <div>
                <div>
                    <p>Name: {product.name}</p>
                </div>
                <div className="details-flex">
                    <div>
                        <p>Width: {product.size.width}</p>
                        <p>Height: {product.size.height}</p>
                    </div>
                    <div>
                        <p>Count: {product.count}</p>
                        <p>Weight: {product.weight}</p>
                    </div>
                </div>

            </div>
            <div>
                <div className="buttons">
                    <Link to={`/product/${product.id}`}><button>View</button></Link>
                    <button onClick={handleModal}>Remove</button>
                </div>
                <DeleteItem show={showDeleteModal} handleModal={handleModal} product={product}>
                    <p>Delete this task?</p>
                </DeleteItem>
            </div>
        </div>
    )
}

export default ProductCard
