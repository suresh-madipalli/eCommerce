export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS,
  }
}

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products: products,
  }
}

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId,
  }
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId,
  }
}
 