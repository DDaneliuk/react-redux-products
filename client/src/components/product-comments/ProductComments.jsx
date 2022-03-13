import React, {useState} from "react"
//style
import './ProductComments.css'
// components
import Comment from './comment/Comment'
import {useDispatch} from "react-redux";
import {addComment} from "../../store/actions";

const ProductComments = ({comments, productId}) => {
    const dispatch = useDispatch();
    const [textComment, setTextComment] = useState("")
    const TimeHelper = () => {
        const d = new Date();
        return [d.getHours(),
                d.getMinutes()].join(':') + ' ' +
            [d.getMonth() + 1,
                d.getDate(),
                d.getFullYear()].join('.')
    }
    const CommentHandler = () => {
        const commentObj = {
            "id": new Date().getTime(),
            "productId": productId,
            "description": textComment,
            "date": TimeHelper()
        }
        dispatch(addComment(productId, commentObj))
        setTextComment("")
    }
    const TextAreaHandler = (e) => {
        setTextComment(e.target.value)
    }
    return (
        <div>
            <h2>Comment</h2>
            {comments.length === 0
                ? <div>
                    <p>No comments yet</p>
                </div> :
                <div>
                    <div>
                        {comments.map((item) => (
                            <Comment comment={item}/>
                        ))}
                    </div>
                </div>}
            <div className="form-comment">
                <textarea onChange={TextAreaHandler} value={textComment} placeholder="Write something"/>
                <button onClick={CommentHandler}>Write comment</button>
            </div>
        </div>

    )
}

export default ProductComments
