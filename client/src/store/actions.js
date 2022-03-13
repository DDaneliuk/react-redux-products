import axios from 'axios'
// types
import {
    FETCH_PRODUCTS,
    GET_PRODUCT,
    DELETE_PRODUCT,
    CREATE_PRODUCT,
    EDIT_PRODUCT,
    ADD_COMMENT,
    DELETE_COMMENT
} from "./types";


export const actionCreators = {
    sortingType: data => ({type: "SORTING_TYPE", payload: data}),
    editItem: data => ({type: "EDIT_ITEM", payload: data}),
};

const URL = 'http://localhost:8000/products';

export const getProducts = () => {
    const request = axios
        .get(`${URL}`)
        .then((res) => res.data);
    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}

export const getProduct = (id) => {
    const request = axios
        .get(`${URL}/${id}`)
        .then((res) => res.data);
    return {
        type: GET_PRODUCT,
        payload: request
    }
}

export const deleteProduct = (id) => {
    axios(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }).then((res) => res.data);
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

export const createProduct = (obj) => {
    const request = axios(`${URL}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        data: JSON.stringify(obj)
    }).then((res) => res.data);
    return {
        type: CREATE_PRODUCT,
        payload: request,
    }

}

export const editProduct = (id, obj) => {
    const request = axios(`${URL}/${id}`, {
        method: 'PATCH',
        header: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        data: obj,
    }).then((res) => res.data)
    return{
        type: EDIT_PRODUCT,
        payload: request
    }
}
export const addComment = (id, comment) => {
    const request = axios(`${URL}/${id}`, {
        method: 'PATCH',
        header: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        data: {comments: [comment]}
    }).then((res) => res.data)
    return{
        type: ADD_COMMENT,
        payload: request,
    }
}
export const deleteComment = (id) => {
    const request = axios(`${URL}/${id}`, {
        method: 'PATCH',
        header: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        data: {comments: []}
    }).then((res) => res.data)
    return{
        type: DELETE_COMMENT,
        payload: request,
    }
}
