import React, { useState } from "react";
import order from "./Order.module.css";
import BankCard from "../BankCard";
import UserInformation from "../UserInformation";
import Map from "../Map";
import CompleteOrder from "../CompleteOrder";
import arrow from "../../Svg/arrow.svg";
import swal from '@sweetalert/with-react'
const components = [
  {
    component: <UserInformation />,
    countButtons: 1,
    setForm: 1,
    nameFirstButton: "Продолжить",
  },
  {
    component: <BankCard />,
    countButtons: 2,
    setForm: 2,
    nameFirstButton: "Вернуться назад",
    nameSecondButton: "Продолжить",
  },
  {
    component: <Map />,
    countButtons: 2,
    setForm: 3,
    nameFirstButton: "Вернуться назад",
    nameSecondButton: "Заказать",
  },
  { component: <CompleteOrder />, setForm: 4, countButtons: 0 },
];
function Order() {
  const [openLayout, setLayout] = useState(0);
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
  const divLayout = (number) => {
    if(number === 3){
      swal("Спасибо!", "Вы оставили заявку!", "success");
    }
    return (
      <div className={order.divContainerInformationOrder}>
        {components[number].component}
        {components[number].countButtons === 0 ? null : components[number]
            .countButtons === 1 ? (
          <button
            className={order.button}
            onClick={() => setLayout(components[number].setForm)}
          >
            {components[number].nameFirstButton}
          </button>
        ) : (
          <>
            {" "}
            <button
              className={order.button}
              onClick={() => setLayout(components[number].setForm - 2)}
            >
              {components[number].nameFirstButton}
            </button>
            <button
              className={order.button}
              onClick={() => setLayout(components[number].setForm)}
            >
              {components[number].nameSecondButton}
            </button>{" "}
          </>
        )}
      </div>
    );
  };
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
      {divLayout(openLayout)}
    </div>
  );
}

export default Order;
