import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, addCount } from "../store/slices/goodsSlice";

const Account = () => {
  const [goods, setGoods] = useState([]);
  const [visibleItems, setVisibleItems] = useState(false);
  const cart = useSelector((state) => state.goodsSlice.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGoods = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setGoods(json));
    };

    fetchGoods();
  }, []);

  const handleClick = (itemId) => {
    const findedItem = goods.find((item) => item.id === itemId);

    dispatch(addCart(findedItem));
    dispatch(addCount());
  };

  return (
    <ul>
      {goods.length > 0 &&
        goods.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);
          const count = cartItem ? cartItem.count : 0;
          return (
            <li className="acc_item" key={item.id}>
              <h2>{item.title}</h2>
              <img
                height={"300px"}
                width={"200px"}
                src={item.image}
                alt={item.title}
              />
              {count ? (
                <div>
                  <button>-</button>
                  <span>{count}</span>
                  <button onClick={() => handleClick(item.id)}>+</button>
                </div>
              ) : (
                <button onClick={() => handleClick(item.id)}>
                  Добавить в корзину
                </button>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default Account;
