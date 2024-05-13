import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App.jsx";
import "./index.css";
import { Context } from "./context/ContextProvider.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor,store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Context>
          <App />
        </Context>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
