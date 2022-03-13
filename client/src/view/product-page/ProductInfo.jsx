import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
// style
import "./ProductInfo.css"
import EditItem from "../../components/modal/EditItem";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../store/actions";
import ProductComments from "../../components/product-comments/ProductComments";

const ProductInfo = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => ({...state}))
    console.log(state)
    const product = state.product.product
    let params = useParams();
    const [showModal, isShowModal] = useState(false)
    // handle modal
    const handleModal = () => {
        isShowModal(!showModal)
    }
    // get product
    useEffect(async () => {
        dispatch(getProduct(params.id))
    }, []);
    return (
        <div className="productInfo">
            <h1>Product Page</h1>
            <div className="details">
                {product ? <div>
                    <h2 className="product_name">Name: {product.name}</h2>
                    <small>ID: {product.id}</small>
                    <p>Count: {product.count}</p>
                    <p>Width: {product.size.width}</p>
                    <p>Height: {product.size.height}</p>
                    <p>Weight: {product.weight}</p>
                </div> : <p>No data</p>}
                <button onClick={handleModal}>Edit product</button>
                <EditItem show={showModal} handleModal={handleModal} product={product}/>
            </div>
            {product ? <ProductComments comments={product.comments} productId={product.id}/> : null}
        </div>
    )
}

export default ProductInfo
