import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import CounterRedux from "./CounterRedux";

// import TodoRedux from "./todo/TodoRedux";
// import store from "./todo/store";
// import store from "./store/store";
// import App from "./hoc/App";

import { Provider } from "react-redux";
import store from "./ecommerceRedux/store";
import App from "./ecommerceRedux/App";
import Cart from "./ecommerceRedux/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ecommerceRedux/Header";
import SingleProduct from "./ecommerceRedux/SingleProduct";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
