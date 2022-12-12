// Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Constant
import { AUTH_SLICE_INITIAL_STATE } from "~/features/auth/constants/auth-slice-constants";

// Interfaces
import { IAuthToken, IAuthAuthenticatedUser } from "~/features/auth/interfaces/auth-interface";

const auth = createSlice({
  name: "auth",
  initialState: AUTH_SLICE_INITIAL_STATE,
  reducers: {
    authSetToken: (
      state,
      { payload: { token, refreshToken } }: PayloadAction<IAuthToken>
    ): void => {
      state.authToken.token = token;
      state.authToken.refreshToken = refreshToken;
    },
    authSetAuthenticatedUser: (state, { payload }: PayloadAction<IAuthAuthenticatedUser>): void => {
      state.authenticatedUser = payload;
    },
    authLogout: (state) => {
      state.authToken = AUTH_SLICE_INITIAL_STATE.authToken;
      state.authenticatedUser = AUTH_SLICE_INITIAL_STATE.authenticatedUser;
    }
  }
});

// Mutations
export const { authSetToken, authSetAuthenticatedUser, authLogout } = auth.actions;

export default auth.reducer;
