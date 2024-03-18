import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, addCount } from "../store/slices/goodsSlice";

const CartPage = () => {
  const { cart } = useSelector((state) => state.goodsSlice);
  const dispatch = useDispatch();

  const handleClick = (itemId) => {
    const findedItem = cart.find((item) => item.id === itemId);

    dispatch(addCart(findedItem));
    dispatch(addCount());
  };

  return (
    <ul className="cart__list">
      {cart.map((cartItem) => (
        <li className="cart__item" key={cartItem.id}>
          <div>
            <img width={"30"} src={cartItem.image} alt="" />
          </div>

          <h2>{cartItem.title}</h2>

          <div>
            <button>-</button>
            <span>{cartItem.count}</span>
            <button onClick={() => handleClick(cartItem.id)}>+ </button>
          </div>

          <p>{cartItem.price * cartItem.count}$</p>
        </li>
      ))}
    </ul>
  );
};

export default CartPage;
