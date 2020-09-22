import * as types from '../actions/types';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      console.log('request');
      return { loading: true };

    case types.USER_LOGIN_SUCCESS:
      console.log('success');
      return { userInfo: action.payload, loading: false };

    case types.USER_LOGIN_FAIL:
      console.log('fail');
      return {
        email: action.payload.email,
        password: action.payload.password,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER_REGISTER_REQUEST:
      console.log('request');
      return { loading: true };

    case types.USER_REGISTER_SUCCESS:
      console.log('success');
      return { userInfo: action.payload, loading: false };

    case types.USER_REGISTER_FAIL:
      console.log('fail');
      return {
        email: action.payload.email,
        password: action.payload.password,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
