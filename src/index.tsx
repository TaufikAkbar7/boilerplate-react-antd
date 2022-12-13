import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { AppEntryPoint } from "./features/app/ui";
import { persistor, store } from "./plugins";
import reportWebVitals from "./reportWebVitals";
import "~/plugins/i18n";
import "~/assets/styles/tailwind.css";
import "~/assets/styles/antd.less";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={"redux loading..."} persistor={persistor}>
          <AppEntryPoint />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
