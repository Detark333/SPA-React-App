import React, {useState} from "react";
import './Order.css'
import BankCard from "../BankCard/BankCard";
import UserInformation from "../UserInformation/UserInformation";
import Map from "../Map/MapContainer";
import CompleteOrder from "../CompleteOrder/CompleteOrder";
function Order() {
    const [openLayout, setLayout] = useState(0)
    const updateLayoutHandler = (index) => {
        setLayout(index)
    }
    return (
        <div>
            <div className="container">
                <div className={'span-text' + (openLayout === 0 ? '-selected' : '')} onClick={() => {setLayout(0);}}>О покупателе</div>
                <svg style={{marginTop: "8px", marginRight: '32px'}} width="81" height="8" viewBox="0 0 81 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.3536 4.35355C80.5488 4.15829 80.5488 3.84171 80.3536 3.64645L77.1716 0.464466C76.9763 0.269204 76.6597 0.269204 76.4645 0.464466C76.2692 0.659728 76.2692 0.976311 76.4645 1.17157L79.2929 4L76.4645 6.82843C76.2692 7.02369 76.2692 7.34027 76.4645 7.53553C76.6597 7.7308 76.9763 7.7308 77.1716 7.53553L80.3536 4.35355ZM0 4.5H80V3.5H0V4.5Z" fill="#BDBDBD"/>
                </svg>
                <div className={'span-text' + (openLayout === 1 ? '-selected' : '')} onClick={() => {setLayout(1);}}>Банковская карта</div>
                <svg style={{marginTop: "8px", marginRight: '32px'}} width="81" height="8" viewBox="0 0 81 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.3536 4.35355C80.5488 4.15829 80.5488 3.84171 80.3536 3.64645L77.1716 0.464466C76.9763 0.269204 76.6597 0.269204 76.4645 0.464466C76.2692 0.659728 76.2692 0.976311 76.4645 1.17157L79.2929 4L76.4645 6.82843C76.2692 7.02369 76.2692 7.34027 76.4645 7.53553C76.6597 7.7308 76.9763 7.7308 77.1716 7.53553L80.3536 4.35355ZM0 4.5H80V3.5H0V4.5Z" fill="#BDBDBD"/>
                </svg>
                <div className={'span-text' + (openLayout === 2 ? '-selected' : '')} onClick={() => {setLayout(2);}}>Адрес</div>
            </div>

                { openLayout === 0 ?
                    <div className="div-container-information-order">
                        <UserInformation/>
                        <button className="button-blue" onClick={ () => updateLayoutHandler(1)}>Продолжить</button>
                    </div>
                    : null
                }
                { openLayout === 1 ?
                    <div className="div-container-information-order">
                        <BankCard/>
                        <button className="button-blue" onClick={() => updateLayoutHandler(0)}>Вернуться назад</button>
                        <button className="button-blue" onClick={() => updateLayoutHandler(2)}>Продолжить</button>
                    </div>
                    : null
                }
                { openLayout === 2 ?
                    <div className="div-container-information-order">
                        <Map/>
                        <br/>
                        <button className="button-blue" onClick={() => updateLayoutHandler(1)}>Вернуться назад</button>
                        <button className="button-blue" onClick={() => updateLayoutHandler(3)}>Заказать</button>
                    </div>
                    : null
                }
            { openLayout === 3 ?
                <div className="div-container-information-order">
                    <CompleteOrder/>
                </div>
                : null
            }
        </div>
    );
}

export default Order;