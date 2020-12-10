import React, { useState } from "react";
import cartComponent from "./CartComponent.module.css";
import cart from "SvgPicture/cart.svg";
function CartComponent(props) {
  const [valueInput, setValueInput] = useState(props.valueNumberInput);
  const [multiCount, setMultiCount] = useState(props.valueNumberInput);
  const sumPrice = props.price * multiCount;
  const inputHandler = (event) => {
    if (event.target.value.length > 0 || event.target.value > 0) {
      setMultiCount(event.target.value);
    }
    props.changeItemSumMassive(props.id);
    setValueInput(event.target.value);
    props.changeItemSumMassive(
      props.id,
      props.price * event.target.value,
      event.target.value
    );
  };
  return (
    <div className={cartComponent.container}>
      <div className={cartComponent.inf}>
        <div className={cartComponent.items}>{props.name}</div>
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
      <div
        className={cartComponent.svg}
        onClick={props.deleteCartProductHandler}
      >
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
}

export default CartComponent;
