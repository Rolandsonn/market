import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "./components/Account";
import "./App.css";
import Header from "./components/Header";
import CartPage from "./components/CartPage";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
