import { IAuthSliceInitialState } from "../interfaces/auth-slice-interface";

export const AUTH_SLICE_INITIAL_STATE: IAuthSliceInitialState = {
  authenticatedUser: {
    id: null,
    name: null,
    email: null
  },
  authToken: {
    token: null,
    refreshToken: null
  }
};
