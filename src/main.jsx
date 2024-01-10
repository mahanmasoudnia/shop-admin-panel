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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        toastStyle={{fontFamily:"Sans-Web", fontSize: "1.6rem"}}
        closeOnClick={true}
        pauseOnHover={true}
        rtl={true}
      />
      <App />
    </Provider>
  </BrowserRouter>
);
