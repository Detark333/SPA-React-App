import React from "react";
import { OrderContext } from "СontextAs/OrderContext";
import user from "./UserInformation.module.css";
const formFields = [
  {
    name: "Фамилия",
    fieldName: "secondName",
    updateFunction: "addUserSecondNameInformation",
  },
  {
    name: "Имя",
    fieldName: "name",
    updateFunction: "addUserNameInformation",
  },
  {
    name: "Отчество",
    fieldName: "thirdName",
    updateFunction: "addUserThirdNameInformation",
  },
  {
    name: "Серия паспорта",
    fieldName: "seriesPassport",
    updateFunction: "addUserSeriesPassportInformation",
  },
  {
    name: "Номер",
    fieldName: "numberPassport",
    updateFunction: "addUserNumberPassportInformation",
  },
  {
    name: "Дата выдачи",
    fieldName: "dateExtradition",
    updateFunction: "addUserDateExtraditionInformation",
  },
];
function UserInformation() {
  return (
    <OrderContext.Consumer>
      {(context) => (
        <>
          <h1>1 шаг из 3</h1>
          {formFields.map(({ name, fieldName, updateFunction }) => (
            <>
              <h3 className={user.text}>{name}</h3>
              <input
                className={user.input}
                type="text"
                value={context.userInformation[fieldName]}
                onChange={(e) => context[updateFunction](e.target.value)}
              />
            </>
          ))}
        </>
      )}
    </OrderContext.Consumer>
  );
}

export default UserInformation;
