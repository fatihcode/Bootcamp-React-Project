import { data } from "../data"
import { ADD_BASKET, DEL_BASKET, PLUS_CART, MINUS_CART } from "../action"

const INITIAL_STATE = {
    bookList: data,
    cart: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

        case ADD_BASKET:
            return { ...state, cart: [...state.cart, ...state.bookList.filter(book => book.id === payload)] }

        case DEL_BASKET:
            return { ...state, cart: state.cart.filter(book => book.id !== payload) }

        case PLUS_CART:
            return {
                ...state, cart: state.cart.map(book => (book.id === payload)
                    ? { ...book, count: ++state.cart.find(item => item.id === payload).count }
                    : { ...book })
            }

        case MINUS_CART:
            return {
                ...state, cart: state.cart.map(book => (book.id === payload)
                    ? { ...book, count: --state.cart.find(item => item.id === payload).count }
                    : { ...book })
            }

        default:
            return state
    }
}