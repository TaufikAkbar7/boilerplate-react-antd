// Redux Toolkit
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

// Mutations
import { authSetToken, authLogout } from "~/features/auth/redux/auth-slice-redux";

// Interfaces
import { IAuthResponseToken } from "~/features/auth/interfaces/auth-response-interface";

// Plugins
import { TRootState } from "~/plugins";

// Mutex
import { Mutex } from "async-mutex";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders(headers, { getState }) {
    const rootState = getState() as TRootState;

    if (rootState.auth.authToken.token) {
      headers.set("Authorization", `Bearer ${rootState.auth.authToken.token}`);
    }

    return headers;
  }
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = (await baseQuery("/auth/refresh-token", api, extraOptions)) as {
          data: IAuthResponseToken;
        };

        if (refreshResult.data) {
          api.dispatch(authSetToken(refreshResult.data?.result));

          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(authLogout());
        }
      } catch (_) {
        api.dispatch(authLogout());
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const emptySplitApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
