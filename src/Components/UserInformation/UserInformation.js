import React, {useState} from "react";
import swal from '@sweetalert/with-react'
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
    errorLength: 100
  },
  {
    name: "Имя",
    fieldName: NAME,
    errorLength: 100
  },
  {
    name: "Отчество",
    fieldName: THIRD_NAME,
    errorLength: 100
  },
  {
    name: "Серия паспорта",
    fieldName: SERIES_PASSPORT,
    errorLength: 4
  },
  {
    name: "Номер",
    fieldName: NUMBER_PASSPORT,
    errorLength: 6
  },
  {
    name: "Дата выдачи",
    fieldName: DATE_EXTRADITION,
    errorLength: 10
  },
];
function UserInformation() {
  const [error, setError] = useState(false)
  if(error){
    swal("Вы ввели больше символов!");
    setError(false)
  }
  return (
    <OrderContext.Consumer>
      {(context) => (
        <>
          <h1>1 шаг из 3</h1>
          {formFields.map(({ name, fieldName, errorLength}) => (
            <>
              <h3 className={user.text}>{name}</h3>
              <input
                className={user.input}
                type="text"
                value={context.userInformation[fieldName]}
                onChange={(e) => {
                  if(e.target.value.length < errorLength + 1) {
                    context.addCardInformation(
                        e.target.value,
                        fieldName,
                        USER_INFORMATION
                    )
                  } else {
                    setError(true)
                  }
                }
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
