import {
  IAuthAttrsLogin,
  IAuthAttrsRegister
} from "~/features/auth/interfaces/auth-attrs-interface";
import {
  IAuthResponseAuthenticatedUser,
  IAuthResponseToken
} from "~/features/auth/interfaces/auth-response-interface";
import { emptySplitApi } from "~/features/app/redux/app-rtk-redux";

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IAuthResponseAuthenticatedUser, IAuthAttrsRegister>({
      query: ({ body }) => ({
        url: "auth/register",
        method: "POST",
        body
      })
    }),
    login: builder.mutation<IAuthResponseToken["result"], IAuthAttrsLogin>({
      query: ({ body }) => ({
        url: "auth/login",
        method: "POST",
        body
      }),
      transformResponse: (res: IAuthResponseToken) => res.result
    })
  }),
  overrideExisting: false
});

export const { useLoginMutation, useRegisterMutation } = authApi;
