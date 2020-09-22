import * as types from './types';
import {getState} from "react"
import Cookie from "js-cookie"
import axios from 'axios';

const apiURL="http://localhost:5000/api"



export const productListAction = () => async (dispatch,getState) => {
  try {
    dispatch({ type: types.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${apiURL}/products/`);

    dispatch({ type: types.PRODUCT_LIST_SUCCESS, payload: data });
    console.log(data)
  } catch (error) {
    dispatch({ type: types.PRODUCT_LIST_FAIL, payload: error.message });
  }
};






export const productDetailsAction = (id) => async (dispatch,getState) => {
  try {
    dispatch({ type: types.PRODUCT_DETAILS_REQUEST, payload: id });
    const { data } = await axios.get(
      `${apiURL}/products/${id}`
    );
    dispatch({ type: types.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};






export const productUploadAction = (product) => async (dispatch,getState) => {
  try {
    dispatch({ type: types.PRODUCT_UPLOAD_REQUEST, payload: product });

    const {userLoggedIn:{userInfo}}=getState()

    const { data } = await axios.post(`${apiURL}/products/`,product,{headers:{
      "Auth":`Owner${userInfo.token}`
    }})

 dispatch({ type: types.PRODUCT_UPLOAD_SUCCESS, payload: data });
 } 
 
 
 catch (error) {
    console.log(error);
    dispatch({ type: types.PRODUCT_UPLOAD_FAIL, payload: error.message });
  }

};



export const  productDeleteAction = (product) => async (dispatch,getState) => {
  try {
    dispatch({ type: types.PRODUCT_UPLOAD_REQUEST, payload: product });

    const {userLoggedIn:{userInfo}}=getState()

    const { data } = await axios.post(`${apiURL}/products/`,product,{headers:{
      "Auth":`Owner${userInfo.token}`
    }})

 dispatch({ type: types.PRODUCT_UPLOAD_SUCCESS, payload: data });
 } 
 
 
 catch (error) {
    console.log(error);
    dispatch({ type: types.PRODUCT_UPLOAD_FAIL, payload: error.message });
  }
};









export const addToCartAction = (id, qty) => async (dispatch) => {
  try {
   
    const { data } = await axios.get(
      `${apiURL}/products/${id}`
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








export const loginAction=(email,password)=>async dispatch=>{
console.log(email, password)
dispatch({type:types.USER_LOGIN_REQUEST,payload:{email,password}})
try {
  const { data } = await axios.post(`${apiURL}/users/login`,{email,password});
  console.log(data)
  dispatch({type:types.USER_LOGIN_SUCCESS,payload:data})
  
  Cookie.set("userInfo",JSON.stringify(data))
} catch (error) {
  dispatch({type:types.USER_LOGIN_FAIL,payload:error.message})
}
}







export const registerAction=(email,name,password,passwordRe)=>async dispatch=>{
console.log(email, password,passwordRe)
password===passwordRe?
dispatch({type:types.USER_REGISTER_REQUEST,payload:{email,password}}):console.log("Passwords don't match")
try {
  const { data } = await axios.post(`${apiURL}/users/register`,{email,name,password});
  console.log(data)
  dispatch({type:types.USER_REGISTER_SUCCESS,payload:data})
  
  Cookie.set("userInfo",JSON.stringify(data))
} catch (error) {
  dispatch({type:types.USER_REGISTER_FAIL,payload:error.message})
}
}