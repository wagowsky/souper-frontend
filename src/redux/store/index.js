import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from "redux-thunk"
import Cookie from "js-cookie"

const cart=Cookie.getJSON("cart")||[];


const initialState={cart}

const store=createStore(rootReducer,initialState,applyMiddleware(thunk))

export default store