import { FETCH_PRODUCTS, FETCH_PRODUCTS_START, FETCH_FAIL, GET_USER } from './actions.js'
const initialState = {
    isLoading: false,
    user: {
        user_id: null,
        username: null,
        name: null,
        email_address: null,
        phone_number: null,
        address_line: null,
        address_state: null,
        address_city: null,
        zip_code: null
    },
    products: [],
    error: ''
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: {
                    user_id: action.payload.user_id,
                    username: action.payload.username,
                    name: action.payload.name,
                    email_address: action.payload.email_address,
                    phone_number: action.payload.phone_number,
                    address_line: action.payload.address_line,
                    address_state: action.payload.address_state,
                    address_city: action.payload.address_city,
                    zip_code: action.payload.zip_code
                }
            }

        default:
            return state;
    }
}