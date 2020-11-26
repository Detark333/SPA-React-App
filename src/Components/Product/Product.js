import React, { useState } from "react";
import product from "./Product.module.css";
import { SumContext } from "СontextAs/SumContext";
function Product(props) {
  const [checked, setChecked] = useState(0);
  return (
    <SumContext.Consumer>
      {(context) => (
        <div className={product.section}>
          <p className={product.text}>{props.section.title}</p>
          <p className={product.sum}>{props.section.price} ₽</p>
          {checked === 0 ? (
            <button
              className={product.button}
              onClick={() => {
                context.addSumMassive(
                  props.index,
                  props.section.title,
                  props.section.price
                );
                setChecked(1);
              }}
            >
              ADD TO CART
            </button>
          ) : (
            <button className={product.button}>ADDED</button>
          )}
        </div>
      )}
    </SumContext.Consumer>
  );
}

export default Product;
