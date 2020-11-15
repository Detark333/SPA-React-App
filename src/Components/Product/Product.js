import React, {useState} from 'react';
import './Product.css'
import {SumContext} from "../../Context/SumContext";
function Product(props) {
    const [checked, setChecked] = useState(0)
    return (
        <SumContext.Consumer>
            {context => (
                <div className="section">
                    <p className="text">{props.section.title}</p>
                    <p className="sum">{props.section.price} ₽</p>
                    {checked === 0 ?
                        <button onClick={ () => {context.addSumMassive(props.index, props.section.title, props.section.price); setChecked(1)}}>ADD TO CART</button>
                        : <button>ADDED</button>
                    }

                </div>
            )
            }
        </SumContext.Consumer>
    );
}

export default Product;