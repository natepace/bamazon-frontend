import axios from 'axios';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_FAIL = 'FETCH_FAIL';
export const GET_USER = 'GET_USER';
export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_START })
        axios
            .get('https://bamazonbackend.herokuapp.com/products')
            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_PRODUCTS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: FETCH_FAIL, payload: err.message })
            })
    }
}

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
}