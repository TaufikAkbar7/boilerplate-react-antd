// Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Constant
import { APP_SLICE_INITIAL_STATE } from "~/features/app/constants/app-slice-constants";
import { APP_LANGUAGE } from "~/features/app/constants/app-constants";

const app = createSlice({
  name: "app",
  initialState: APP_SLICE_INITIAL_STATE,
  reducers: {
    appSetLanguage: (state, { payload }: PayloadAction<APP_LANGUAGE>): void => {
      state.appLocale = payload;
    }
  }
});

// Mutations
export const { appSetLanguage } = app.actions;

export default app.reducer;
