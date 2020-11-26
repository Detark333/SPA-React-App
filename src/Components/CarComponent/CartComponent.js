import React, { useState } from "react";
import cart from "./CartComponent.module.css";
import SvgCart from "./SvgCart";
function CartComponent(props) {
  const [valueInput, setValueInput] = useState(props.valueNumberInput);
  const [multiCount, setMultiCount] = useState(props.valueNumberInput);
  const sumPrice = props.price * multiCount;
  const InputHandler = (event) => {
    if (event.target.value.length > 0 || event.target.value > 0) {
      setMultiCount(event.target.value);
    }
    props.ChangeItemSumMassive(props.id);
    setValueInput(event.target.value);
    props.ChangeItemSumMassive(
      props.id,
      props.price * event.target.value,
      event.target.value
    );
  };
  return (
    <div className={cart.container}>
      <div className={cart.inf}>
        <div className={cart.items}>{props.name}</div>
        <div className={cart.items} style={{ width: "50px" }}>
          {sumPrice}₽
        </div>
        <input
          className={cart.count}
          width="15"
          type="number"
          min="1"
          value={valueInput}
          required
          placeholder="Введите количество"
          onChange={InputHandler}
        />
      </div>
      <SvgCart
        style={cart.svg}
        DeleteCartProductHandler={props.DeleteCartProductHandler}
      />
    </div>
  );
}

export default CartComponent;
