export const ADD_BASKET = "ADD_BASKET"
export const DEL_BASKET = 'DEL_BASKET'
export const MINUS_CART = 'MINUS_CART'
export const PLUS_CART = 'PLUS_CART'

export const addCart = (id) => ({
    type: ADD_BASKET,
    payload: id
})

export const delCart = (id) => ({
    type: DEL_BASKET,
    payload: id
})

export const minusCart = (id) => ({
    type: MINUS_CART,
    payload: id
})

export const plusCart = (id) => ({
    type: PLUS_CART,
    payload: id
})