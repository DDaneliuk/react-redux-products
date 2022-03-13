import React from "react"
// style
import './Comment.css'
import {useDispatch} from "react-redux";
import {deleteComment} from "../../../store/actions";

const Comment = ({comment}) => {
    const dispatch = useDispatch()
    const DeleteHandler = () =>{
        dispatch(deleteComment(comment.productId))
    }
    return (
        <div className="comment">
            <div className="content">
                <p>Comment: {comment.description}</p>
            </div>
            <div className="btn">
                <button onClick={DeleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Comment
