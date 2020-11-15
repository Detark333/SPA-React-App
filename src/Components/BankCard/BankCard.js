import React from 'react';
import './BankCard.css'
import {OrderContext} from "../../Context/OrderContext";
function BankCard() {
    return (
        <OrderContext.Consumer>
            {context =>
                <>
                    <h1>2 шаг из 3</h1>
                    <div className="flex-container-card">
                        <div className="card-visa">
                            <div>
                                <div>
                                    <h1>Visa</h1>
                                </div>
                            </div>
                            <div className="number-ccv-flex">
                                <span>{context.card.CardNumber}</span>
                                <span>{context.card.CardCCV}</span>
                            </div>
                            <div className="holder-date-flex">
                                <div>
                                    <label>Card Holder
                                        <p>{context.card.CardName}</p>
                                    </label>
                                </div>
                                <div>
                                    <label>Expires
                                        <p>{context.card.CardMonth} / {context.card.CardDay}</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="input-container">

                                <label>NAME
                                    <input className="input-label" type="text" onChange={(e) => context.addCardNameInformation(e.target.value)}/>
                                </label>
                                <label>NUMBER
                                    <input className="input-label" type="text" maxLength="16" onChange={(e) => context.addCardNumberInformation(e.target.value)}/>
                                </label>
                                <div>
                                    <label>EXPIRATION DATE</label>
                                    <input className="input-date" type="text" maxLength="2" onChange={(e) => context.addCardMonthInformation(e.target.value)}/>
                                    <input className="input-date" type="text" maxLength="2" onChange={(e) => context.addCardDayInformation(e.target.value)}/>
                                </div>
                                <label>CCV
                                    <input className="input-label" type="text" maxLength="3" onChange={(e) => context.addCardCVVInformation(e.target.value)}/>
                                </label>
                        </div>
                    </div>
                </>
            }
        </OrderContext.Consumer>
    );
}

export default BankCard;