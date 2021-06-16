import { SIGN_IN, SIGN_OUT } from "../constants/signIn.constant";

const initalState = {
  auth: {},
};

export const signInReducer = (state = initalState, action) => {
  let authUpdate = { ...state.auth }
  switch (action.type) {
    case SIGN_IN: {// signIn
      authUpdate = action.payload;
      state.auth = authUpdate;
      return { ...state };
    }
    case SIGN_OUT: {// signOut
      authUpdate = null;
      state.auth = authUpdate
      return { ...state }
    }
    default:
      return { ...state };
  }
};
