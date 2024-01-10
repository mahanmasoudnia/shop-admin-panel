import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../layout/Dashboard/Dashboard";
import Products from "../pages/products/Products";
import Basket from "../pages/Basket/Basket";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Router = () => {
  const location = useLocation();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="card" element={<Basket />}></Route>
          </Route>
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Router;
