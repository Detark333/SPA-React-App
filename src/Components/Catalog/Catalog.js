import React, {useState , useContext} from "react";
import './Catalog.css'
import Product from "../Product/Product";
import {Context} from '../../Context/Context.js'
function Catalog() {
    let [upd, updMass] = useState(-1)
    const value = useContext(Context);
    let massiveUpd;
    let mass  = value
    if(upd === 1) {
        //пузырек
        for (let i = 1; i < mass.length; ++i) {
            for (let r = 0; r < mass.length - i; r++) {
                if (mass[r].price < mass[r + 1].price) {
                    let temp = mass[r];
                    mass[r] = mass[r + 1];
                    mass[r + 1] = temp;
                }
            }
        }
    }
    if(upd === 0) {
        mass.sort((a, b) => a.price - b.price);
    }
    if(upd === 2) {
        mass.sort(function(a, b){
            let aname = a.title.toLowerCase(),
                bname = b.title.toLowerCase();
            if(aname < bname) return -1;
            if(aname > bname) return 1;
            return 0;
        });
    }
    massiveUpd = mass.map((section) =>{
    return(
        <Product
            key={section.id}
            section={section}
            index={section.id}
        />
    )})
    if(upd === 3){
        massiveUpd = mass.map((section)=>{
            if(section.price < 101){
                return(
                    <Product
                        key={section.id}
                        section={section}
                        index={section.id}
                    />
                )
            } else {
                return null;
            }
        })
    }
    return (
            <div>
                <div className="container">
                    <div className="span-main">Сортировать по:</div>
                    <div className={'span-select' + (upd === 0 ? '-blue' : '')} onClick={() => {updMass(0)}}>возрастанию цены</div>
                    <div className={'span-select' + (upd === 1 ? '-blue' : '')} onClick={() => updMass(1)}>убыванию цены</div>
                    <div className={'span-select' + (upd === 2 ? '-blue' : '')} onClick={() => updMass(2)}>названию</div>
                    <div className={'span-select' + (upd === 3 ? '-blue' : '')} onClick={() => updMass(3)}>цене меньше 100</div>
                </div>
                <div className="flex-container">
                        {massiveUpd}
                </div>

            </div>
    );
}

export default Catalog;