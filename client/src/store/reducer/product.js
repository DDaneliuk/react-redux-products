import {
    ADD_COMMENT,
    CREATE_PRODUCT, DELETE_COMMENT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    FETCH_PRODUCTS,
    GET_PRODUCT
} from "../types";

const initialState = {
    products: []
};

const deleteProductFromList = (array, action) => {
    return array.filter((item) => item.id !== action.payload);
};

const sortByName = (array) => {
    return [...array].sort(function (a, b) {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0;
    })
}
const sortByCount = (array) => {
    return [...array].sort(function (a, b) {
        return a.count - b.count;
    })
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PRODUCT:
            console.log("payload", action.payload)
            return {...state, products: [action.payload], product: action.payload}

        case CREATE_PRODUCT:
            return {...state, products: sortByName([...state.products, action.payload])};

        case FETCH_PRODUCTS:
            return {...state, products: sortByName(action.payload)}

        case GET_PRODUCT:
            return {...state, product: action.payload}

        case DELETE_PRODUCT:
            return {...state, products: deleteProductFromList(state.products, action)};

        case "SORTING_TYPE":
            if (action.payload === 'count') {
                return {...state, products: sortByCount(state.products)};
            }
            if (action.payload === 'name') {
                return {...state, products: sortByName(state.products)};
            }
            return
        case ADD_COMMENT:
            return {...state, product: action.payload}

        case DELETE_COMMENT:
            return {...state, product: action.payload}
        default:
            return state;
    }
};

export default productReducer
