import * as types from './types';
import {getState} from "react"
import Cookie from "js-cookie"
import axios from 'axios';

export const productListAction = () => async (dispatch,getState) => {
  try {
    dispatch({ type: types.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('http://localhost:5000/api/products/');
console.log(data);
    dispatch({ type: types.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const productDetailsAction = (id) => async (dispatch,getState) => {
  try {
    dispatch({ type: types.PRODUCT_DETAILS_REQUEST, payload: id });
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    dispatch({ type: types.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

export const addToCartAction = (id, qty) => async (dispatch) => {
  try {
   
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    dispatch({
      type: types.ADD_TO_CART,
      payload: {
        productID:data._id,
        productName:data.name,
        productImage:data.image,
        productPrice:data.price,
        stock:data.stock,
        qty:qty
      },
    });
    const{cart}=getState()
    Cookie.set("cart", JSON.stringify(cart))
  } catch (error) {
    console.log(error);
    // dispatch({ type: types.REMOVE_FROM_CART, payload: error.message });
  }
};

export const removeFromCartAction = (productID) => async (dispatch) => {
  try {
    
    dispatch({ type: types.REMOVE_FROM_CART, payload:productID });
    const { cart: { cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
  }
    catch (error) {
      console.log(error);
   
    }
    
  
};
