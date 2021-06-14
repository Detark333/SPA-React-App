import React, { useState } from "react";
import cartComponent from "./CartComponent.module.css";
import cart from "../../Svg/cart.svg";

function CartComponent(props) {
  const {
    valueNumberInput,
    price,
    changeItemSumMassive,
    id,
    name,
    deleteCartProductHandler,
  } = props;
  const [valueInput, setValueInput] = useState(valueNumberInput);
  const [multiCount, setMultiCount] = useState(valueNumberInput);
  const sumPrice = price * multiCount;
  const inputHandler = (event) => {
    if (event.target.value.length > 0 || event.target.value > 0) {
      setMultiCount(event.target.value);
    }
    changeItemSumMassive(id);
    setValueInput(event.target.value);
    changeItemSumMassive(id, price * event.target.value, event.target.value);
  };
  return (
    <div className={cartComponent.container}>
      <div className={cartComponent.inf}>
        <div className={cartComponent.items}>{name}</div>
        <div className={cartComponent.items} style={{ width: "50px" }}>
          {sumPrice}₽
        </div>
        <input
          className={cartComponent.count}
          width="15"
          type="number"
          min="1"
          value={valueInput}
          required
          placeholder="Введите количество"
          onChange={inputHandler}
        />
      </div>
      <div className={cartComponent.svg} onClick={deleteCartProductHandler}>
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
}

export default CartComponent;
