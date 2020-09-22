import { combineReducers } from 'redux';
import {productListReducer, productDetailsReducer,productUploadReducer,productDeleteReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import {userLoginReducer,userRegisterReducer} from './userReducer';

const rootReducer = combineReducers({
   productListReducer,
   productDetailsReducer,
   cartReducer,
   userLoginReducer,
   userRegisterReducer,
   productUploadReducer,
   productDeleteReducer
}); 

export default rootReducer;
