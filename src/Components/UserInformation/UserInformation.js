import React from "react";
import { OrderContext } from "СontextAs/OrderContext";
import {
  USER_INFORMATION,
  SECOND_NAME,
  NAME,
  THIRD_NAME,
  SERIES_PASSPORT,
  NUMBER_PASSPORT,
  DATE_EXTRADITION,
} from "@/Constants";
import user from "./UserInformation.module.css";
const formFields = [
  {
    name: "Фамилия",
    fieldName: SECOND_NAME,
  },
  {
    name: "Имя",
    fieldName: NAME,
  },
  {
    name: "Отчество",
    fieldName: THIRD_NAME,
  },
  {
    name: "Серия паспорта",
    fieldName: SERIES_PASSPORT,
  },
  {
    name: "Номер",
    fieldName: NUMBER_PASSPORT,
  },
  {
    name: "Дата выдачи",
    fieldName: DATE_EXTRADITION,
  },
];
function UserInformation() {
  return (
    <OrderContext.Consumer>
      {(context) => (
        <>
          <h1>1 шаг из 3</h1>
          {formFields.map(({ name, fieldName }) => (
            <>
              <h3 className={user.text}>{name}</h3>
              <input
                className={user.input}
                type="text"
                value={context.userInformation[fieldName]}
                onChange={(e) =>
                  context.addCardInformation(
                    e.target.value,
                    fieldName,
                    USER_INFORMATION
                  )
                }
              />
            </>
          ))}
        </>
      )}
    </OrderContext.Consumer>
  );
}

export default UserInformation;
