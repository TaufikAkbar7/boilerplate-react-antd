import { IAuthToken, IAuthAuthenticatedUser } from "./auth-interface";

export interface IAuthSliceInitialState {
  authenticatedUser: IAuthAuthenticatedUser;
  authToken: IAuthToken;
}
