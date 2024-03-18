import React from "react";
import { Link } from "react-router-dom";
import cart from "../cart.png";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector((state) => state.goodsSlice.totalItems);

  return (
    <header className="header">
      <div className="logo">Магазин одежды</div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/catalog">Каталог</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <Link className="cart-link" to={"/cart"}>
          <span>{totalItems}</span> |
          <img src={cart} alt="cart" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
