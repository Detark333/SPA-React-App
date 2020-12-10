import React, { useState, useContext } from "react";
import catalog from "./Catalog.module.css";
import Product from "Container/Product";
import { Context } from "СontextAs/Context";
function Catalog() {
  const [upd, updMass] = useState(-1);
  const value = useContext(Context);
  let product; //переменная let здесь необхоима
  const mass = value;
  if (upd === 1) {
    mass.sort((a, b) => b.price - a.price);
  }
  if (upd === 0) {
    mass.sort((a, b) => a.price - b.price);
  }
  if (upd === 2) {
    mass.sort(function (a, b) {
      const aName = a.title.toLowerCase(),
        bName = b.title.toLowerCase();
      if (aName < bName) return -1;
      if (aName > bName) return 1;
      return 0;
    });
  }
  product = mass.map((section) => {
    return <Product key={section.id} section={section} index={section.id} />;
  });
  if (upd === 3) {
    product = mass.map((section) => {
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
      <div className={catalog.flexContainer}>{product}</div>
    </div>
  );
}

export default Catalog;
