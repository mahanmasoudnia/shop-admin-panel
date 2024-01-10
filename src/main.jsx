import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
    <ToastContainer style={{fontSize:"1.6rem",  fontFamily: "sans-serif" }} rtl={true} />
      <App />
    </Provider>
  </BrowserRouter>
);
