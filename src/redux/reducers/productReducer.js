import * as types from "../actions/types"

export const productListReducer=(state={products:[]},action)=>{
switch(action.type){

    case types.PRODUCT_LIST_REQUEST:
    return {loading:true};

    case types.PRODUCT_LIST_SUCCESS:
       
    return {...state,products:action.payload,loading:false};

    case types.PRODUCT_LIST_FAIL:
    return {loading:false,error:action.payload};

    default:
        return state;
}
}
//  export default productListReducer;

export const productDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){

        case types.PRODUCT_DETAILS_REQUEST:
        return {loading:true};

        case types.PRODUCT_DETAILS_SUCCESS:
           
        return {...state,loading:false,product:action.payload};

        case types.PRODUCT_DETAILS_FAIL:
        return {loading:false,error:action.payload};

        default:
            return state;
    }
    }