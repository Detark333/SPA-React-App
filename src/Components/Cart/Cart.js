import React from "react";
import cart from "./Cart.module.css";
import CartComponent from "Container/CartComponent";
import { SumContext } from "СontextAs/SumContext";
import { Link } from "react-router-dom";
function Cart() {
  const sumHandler = (mass) => {
    return mass.reduce(function (sum, current) {
      return sum + current.priceCart;
    }, 0);
  };
  return (
    <SumContext.Consumer>
      {(sumContext) => (
        <div className={cart.container}>
          <h1 className={cart.text}>Корзина</h1>
          {sumContext.sumMassive.map((product, key) => {
            return (
              <CartComponent
                key={key}
                name={product.name}
                priceCart={product.priceCart}
                price={product.price}
                valueNumberInput={product.count}
                id={product.id}
                deleteCartProductHandler={() => {
                  sumContext.delSumMassive(product.id);
                }}
                changeItemSumMassive={(id, price, count) => {
                  sumContext.changeItemSumMassive(id, price, count);
                }}
              />
            );
          })}
          <hr />
          {sumContext.sumMassive.length === 0 ? (
            <div>Нет данных</div>
          ) : (
            <div>
              <div>Итог: {sumHandler(sumContext.sumMassive)}</div>
              <div>
                <Link className={cart.route} to="/order">
                  Оплата
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </SumContext.Consumer>
  );
}

export default Cart;
