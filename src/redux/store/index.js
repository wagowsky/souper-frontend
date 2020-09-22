import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from "redux-thunk"
import Cookie from "js-cookie"

const cart=Cookie.getJSON("cart")||[];
const userInfo=Cookie.getJSON("userInfo")||null;


const initialState={cart,userLoggedIn:{userInfo}}

const store=createStore(rootReducer,initialState,applyMiddleware(thunk))

export default store