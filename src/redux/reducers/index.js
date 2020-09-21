import { combineReducers } from 'redux';
import {productListReducer, productDetailsReducer} from './productReducer';
import {cartReducer} from './cartReducer';

const rootReducer = combineReducers({
   productListReducer,
   productDetailsReducer,
   cartReducer
}); 

export default rootReducer;
