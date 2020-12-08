import React, { useState } from "react";
import product from "./Product.module.css";
import { SumContext } from "СontextAs/SumContext";
function Product(props) {
  const [checked, setChecked] = useState(0);
  const {
    section: { title, price },
    index,
  } = props;
  return (
    <SumContext.Consumer>
      {(context) => (
        <div className={product.section}>
          <p className={product.text}>{title}</p>
          <p className={product.sum}>{price} ₽</p>
          {checked === 0 ? (
            <button
              className={product.button}
              onClick={() => {
                context.addSumMassive(index, title, price);
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
