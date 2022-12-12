// Redux Toolkit
import { combineReducers } from "@reduxjs/toolkit";

// Slices
import app from "~/features/app/redux/app-slice-redux";
import auth from "~/features/auth/redux/auth-slice-redux";

// Api
import { authApi } from "~/features/auth/redux/auth-rtk-redux";

const plainReducers = {
  app,
  auth,
  [authApi.reducerPath]: authApi.reducer
};

const reducers = combineReducers(plainReducers);

export { plainReducers, reducers };
