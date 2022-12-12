import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { notification } from "antd";
import { IApiResponseError } from "~/features/app/interfaces/app-api-interface";
/**
 * Log a warning and show a toast!
 */

const genericError = (errorType: string): string => {
  switch (errorType) {
    case "FETCH_ERROR":
      return "Internal server error!";
    default:
      return "";
  }
};

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    const newAction = action as {
      payload: {
        status: string | number;
        data: IApiResponseError;
        error?: string;
      };
    };
    const {
      payload: { data, error }
    } = newAction;
    notification.error({
      message: "Error!",
      description: genericError(newAction.payload.status as string) || error || data.message
    });
  }

  return next(action);
};
