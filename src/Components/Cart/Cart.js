import React from 'react';
import './Cart.css'
import CartComponent from "../CarComponent/CartComponent";
import {SumContext} from '../../Context/SumContext.js'
import { Link } from "react-router-dom";
function Cart() {
    const SumHandler = (mass) => {
        let sum = 0;
        mass.forEach((item) => {
            sum += item.priceCart
        })
        return sum;
    }
    return (
        <SumContext.Consumer>
            {sumContext => (
            <div className="div-container">
                <h1 className="cart-text">Корзина</h1>
                {sumContext.sumMassive.map((product, key) => {
                    return (<CartComponent
                        key={key}
                        name={product.name}
                        priceCart={product.priceCart}
                        price={product.price}
                        valueNumberInput={product.count}
                        id={product.id}
                        DeleteCartProductHandler={() => {sumContext.delSumMassive(product.id)}}
                        ChangeItemSumMassive={ (id, price, count) => {sumContext.changeItemSumMassive(id, price, count)}}
                    />
                    )
                })
                }
                <hr/>
                {
                    sumContext.sumMassive.length === 0 ? <div>Нет данных</div> : <div>
                        <div>Итог: {SumHandler(sumContext.sumMassive)}</div>
                        <div>
                            <Link className="link-style" to='/order'>Оплата</Link>
                        </div>
                    </div>
                }
            </div>
                )}
        </SumContext.Consumer>
    );
}

export default Cart;