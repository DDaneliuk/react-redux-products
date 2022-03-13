import React from "react"
//style
import "./Modal.css"
//redux
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../store/actions";

const DeleteItem = ({handleModal, show, children, product}) => {
    const dispatch = useDispatch();
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const removeItemFromList = () => {
        dispatch(deleteProduct(product.id));
        handleModal()
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div className="btn-group">
                    <button type="button" onClick={handleModal}>
                        Cancel
                    </button>
                    <button onClick={() => removeItemFromList()}>Delete</button>
                </div>
            </section>
        </div>
    )
}

export default DeleteItem
