import React, { useContext } from "react";
import bank from "./BankCard.module.css";
import { OrderContext } from "СontextAs/OrderContext";
import {CARD_NAME, CARD_NUMBER, CARD_MONTH, CARD_DAY, CARD_CVV, CARD} from "@/Constants";
function BankCard() {
  const context = useContext(OrderContext);
  const {
    card: { cardNumber, cardCvv, cardName, cardMonth, cardDay },
  } = context;
  return (
    <OrderContext.Consumer>
      {(context) => (
        <>
          <h1>2 шаг из 3</h1>
          <div className={bank.container}>
            <div className={bank.visa}>
              <div>
                <div>
                  <h1>Visa</h1>
                </div>
              </div>
              <div className={bank.ccv}>
                <span>{cardNumber}</span>
                <span>{cardCvv}</span>
              </div>
              <div className={bank.date}>
                <div>
                  <label>
                    Card Holder
                    <p>{cardName}</p>
                  </label>
                </div>
                <div>
                  <label>
                    Expires
                    <p>
                      {cardMonth} / {cardDay}
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className={bank.input}>
              <label>
                NAME
                <input
                  className={bank.label}
                  type="text"
                  onChange={(e) =>
                    context.addCardInformation(e.target.value, CARD_NAME, CARD)
                  }
                />
              </label>
              <label>
                NUMBER
                <input
                  className={bank.label}
                  type="text"
                  maxLength="16"
                  onChange={(e) =>
                    context.addCardInformation(e.target.value, CARD_NUMBER, CARD)
                  }
                />
              </label>
              <div>
                <label>EXPIRATION DATE</label>
                <input
                  className={bank.year}
                  type="text"
                  maxLength="2"
                  onChange={(e) =>
                    context.addCardInformation(e.target.value, CARD_MONTH, CARD)
                  }
                />
                <input
                  className={bank.year}
                  type="text"
                  maxLength="2"
                  onChange={(e) =>
                    context.addCardInformation(e.target.value, CARD_DAY, CARD)
                  }
                />
              </div>
              <label>
                CCV
                <input
                  className={bank.label}
                  type="text"
                  maxLength="3"
                  onChange={(e) =>
                    context.addCardInformation(e.target.value, CARD_CVV, CARD)
                  }
                />
              </label>
            </div>
          </div>
        </>
      )}
    </OrderContext.Consumer>
  );
}

export default BankCard;
