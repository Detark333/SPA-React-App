import React, { useState } from "react";
import order from "./Order.module.css";
import BankCard from "Container/BankCard";
import UserInformation from "Container/UserInformation";
import Map from "Container/Map";
import CompleteOrder from "Container/CompleteOrder";
import arrow from "./arrow.svg";
function Order() {
  const [openLayout, setLayout] = useState(0);
  const updateLayoutHandler = (index) => {
    setLayout(index);
  };
  const divMain = (name, count) => (
    <div
      className={openLayout === count ? order.spanTextSelected : order.spanText}
      onClick={() => {
        setLayout(count);
      }}
    >
      {name}
    </div>
  );
  return (
    <div>
      <div className={order.containerDiv}>
        {divMain("О покупателе", 0)}
        <img
          src={arrow}
          style={{ marginTop: "8px", marginRight: "32px" }}
          alt="arrow"
        />
        {divMain("Банковская карта", 1)}
        <img
          src={arrow}
          style={{ marginTop: "8px", marginRight: "32px" }}
          alt="arrow"
        />
        {divMain("Адрес", 2)}
      </div>

      {openLayout === 0 ? (
        <div className={order.divContainerInformationOrder}>
          <UserInformation />
          <button
            className={order.button}
            onClick={() => updateLayoutHandler(1)}
          >
            Продолжить
          </button>
        </div>
      ) : null}
      {openLayout === 1 ? (
        <div className={order.divContainerInformationOrder}>
          <BankCard />
          <button
            className={order.button}
            onClick={() => updateLayoutHandler(0)}
          >
            Вернуться назад
          </button>
          <button
            className={order.button}
            onClick={() => updateLayoutHandler(2)}
          >
            Продолжить
          </button>
        </div>
      ) : null}
      {openLayout === 2 ? (
        <div className={order.divContainerInformationOrder}>
          <Map />
          <br />
          <button
            className={order.button}
            onClick={() => updateLayoutHandler(1)}
          >
            Вернуться назад
          </button>
          <button
            className={order.button}
            onClick={() => updateLayoutHandler(3)}
          >
            Заказать
          </button>
        </div>
      ) : null}
      {openLayout === 3 ? (
        <div className={order.divContainerInformationOrder}>
          <CompleteOrder />
        </div>
      ) : null}
    </div>
  );
}

export default Order;
