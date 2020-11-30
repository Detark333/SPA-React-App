import React, { useState, useContext } from "react";
import catalog from "./Catalog.module.css";
import Product from "./index";
import { Context } from "СontextAs/Context";
function Catalog() {
  const [upd, updMass] = useState(-1);
  const value = useContext(Context);
  let massiveUpd;
  const mass = value;
  if (upd === 1) {
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
  if (upd === 0) {
    mass.sort((a, b) => a.price - b.price);
  }
  if (upd === 2) {
    mass.sort(function (a, b) {
      let aname = a.title.toLowerCase(),
        bname = b.title.toLowerCase();
      if (aname < bname) return -1;
      if (aname > bname) return 1;
      return 0;
    });
  }
  massiveUpd = mass.map((section) => {
    return <Product key={section.id} section={section} index={section.id} />;
  });
  if (upd === 3) {
    massiveUpd = mass.map((section) => {
      if (section.price < 101) {
        return (
          <Product key={section.id} section={section} index={section.id} />
        );
      } else {
        return null;
      }
    });
  }
  const divElement = (name, count) => (
    <div
      className={upd === count ? catalog.spanSelectBlue : catalog.spanSelect}
      onClick={() => {
        updMass(count);
      }}
    >
      {name}
    </div>
  );
  return (
    <div>
      <div className={catalog.container}>
        <div className={catalog.spanMain}>Сортировать по:</div>
        {divElement("возрастанию цены", 0)}
        {divElement("убыванию цены", 1)}
        {divElement("названию", 2)}
        {divElement("цене меньше 100", 3)}
      </div>
      <div className={catalog.flexContainer}>{massiveUpd}</div>
    </div>
  );
}

export default Catalog;
