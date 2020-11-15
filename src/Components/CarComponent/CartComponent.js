import React, {useState} from 'react';
import './CartComponent.css'
function CartComponent(props) {
    const [valueInput,setValueInput] = useState(props.valueNumberInput)
    const [multiCount,setMultiCount] = useState(props.valueNumberInput)
    let sumPrice = props.price * multiCount
    const InputHandler = (event) =>{
            if(event.target.value.length > 0 || event.target.value > 0) {
                setMultiCount(event.target.value);
            }
            props.ChangeItemSumMassive(props.id)
        setValueInput(event.target.value)
        props.ChangeItemSumMassive(props.id, props.price * event.target.value, event.target.value)
    }
    return (
        <div className="component-container">
            <div className="inf-container">
                <div className="inf-container-items">{props.name}</div>
                <div className="inf-container-items" style={{width: '50px'}}>{sumPrice}₽</div>
                <input className="input-count" width="15" type="number" min="1" value={valueInput} required placeholder="Введите количество" onChange={InputHandler}/>
            </div>
            <svg onClick={props.DeleteCartProductHandler} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 11V17" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 11V17" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

export default CartComponent;