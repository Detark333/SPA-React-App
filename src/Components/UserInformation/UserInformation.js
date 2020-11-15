import React from 'react';
import {OrderContext} from "../../Context/OrderContext";
import './UserInformation.css'
function UserInformation() {
    return (
        <OrderContext.Consumer>
            {context =>
                <>
                    <h1>1 шаг из 3</h1>
                    <h3>Фамилия</h3>
                    <input className="input" type="text" value={context.userInformation.SecondName} onChange={(e => context.addUserSecondNameInformation(e.target.value))}/>
                    <h3>Имя</h3>
                    <input className="input" type="text" value={context.userInformation.Name} onChange={(e => context.addUserNameInformation(e.target.value))}/>
                    <h3>Отчество</h3>
                    <input className="input" type="text" value={context.userInformation.ThirdName} onChange={(e => context.addUserThirdNameInformation(e.target.value))}/>
                    <h3>Серия паспорта</h3>
                    <input className="input" type="text" value={context.userInformation.SeriesPassport} onChange={(e => context.addUserSeriesPassportInformation(e.target.value))}/>
                    <h3>Номер</h3>
                    <input className="input" type="text" value={context.userInformation.NumberPassport} onChange={(e => context.addUserNumberPassportInformation(e.target.value))}/>
                    <h3>Дата выдачи</h3>
                    <input className="input" type="text" value={context.userInformation.DateExtradition} onChange={(e => context.addUserDateExtraditionInformation(e.target.value))}/>
                    <br/>
                </>
            }
        </OrderContext.Consumer>
    );
}

export default UserInformation;