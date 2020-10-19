import React, { createContext, useReducer } from "react";
import { USER_LOGIN, SET_USER, LOG_OUT, REG_USER } from "./types";
import { LoginActions, Logout, RegUser } from "./actions"

export const DataContext = createContext();

const initialState = {
  setUser: {
    isUserAutheticated: false,
    userKey: ""
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return LoginActions(state, action)

    case REG_USER:
      alert("reg2")
      return RegUser(state, action)

    case SET_USER:
      console.log(action.payload)
      let setUser = action.payload
      return {
        ...state, setUser
      }

    case LOG_OUT:
      return Logout(state, action) ? initialState : state

    default:
      return state;
  }
};

function DataContextProvider(props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
