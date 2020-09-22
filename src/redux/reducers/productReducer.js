import * as types from "../actions/types"

export const productListReducer=(state={products:[]},action)=>{
switch(action.type){

    case types.PRODUCT_LIST_REQUEST:
    return {loading:true};

    case types.PRODUCT_LIST_SUCCESS:
       console.log(action.payload)
    return {...state,products:action.payload,loading:false};

    case types.PRODUCT_LIST_FAIL:
    return {loading:false,error:action.payload};

    default:
        return state;
}
}


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





export const productUploadReducer=(state={product:{}},action)=>{
    switch(action.type){

        case types.PRODUCT_UPLOAD_REQUEST:
        return {loading:true};

        case types.PRODUCT_UPLOAD_SUCCESS:
           
        return {...state,loading:false,product:action.payload,success:true};

        case types.PRODUCT_UPLOAD_FAIL:
        return {loading:false,error:action.payload};

        default:
            return state;
    }
    }



export const productDeleteReducer=(state={product:{}},action)=>{
    switch(action.type){

        case types.PRODUCT_DELETE_REQUEST:
        return {loading:true};

        case types.PRODUCT_DELETE_SUCCESS:
           
        return {...state,loading:false,product:action.payload,success:true};

        case types.PRODUCT_DELETE_FAIL:
        return {loading:false,error:action.payload};

        default:
            return state;
    }
    }