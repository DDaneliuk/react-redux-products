import React, {useEffect, useState} from "react";
// components
import ProductCard from '../../components/product-card/ProductCard'
import AddItem from '../../components/modal/AddItem'
import Sorting from '../../components/product-sorting/Sorting'
// style
import "./ProductList.css";
// redux
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/actions";


const ProductList = () => {
    const products = useSelector((state) => state.product.products)
    const dispatch = useDispatch();
    // handler for modal - add new item
    const [showDeleteModal, IsShowDeleteModal] = useState(false)
    const handleModal = () => {
        IsShowDeleteModal(!showDeleteModal)
    }

    useEffect(async () => {
        dispatch(getProducts())
    }, [])

    return (
        <div className="productList">
            <div>
                <h1>Product List</h1>
                <div className="products">
                    {products.length === 0 ?
                        <div className="empty-block">
                            <h2>No products yet</h2>
                            <p>Press button to create new product</p>
                        </div>
                        : <div>
                            <Sorting/>
                            <div>
                                {products.map((item) => (<ProductCard key={item.id} product={item}/>))}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div>
                <button onClick={handleModal} className="create-btn">Create product</button>
            </div>
            <AddItem show={showDeleteModal} handleModal={handleModal}/>
        </div>
    )
}

export default ProductList
