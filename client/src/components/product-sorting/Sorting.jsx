import React from "react"
//redux
import { useDispatch } from "react-redux";
import {actionCreators} from "../../store/actions";
// style
import './Sorting.css'
const Sorting = () => {
    const dispatch = useDispatch();

    const SortHandler = (e) => {
        dispatch(actionCreators.sortingType(e.target.value));
    }
    return (
        <div className="sorting">
            <p className="sort-head">Sorting by:</p>
            <select onChange={e => SortHandler(e)}>
                <option value="name">name</option>
                <option value="count">count</option>
            </select>
        </div>
    )
}

export default Sorting;
