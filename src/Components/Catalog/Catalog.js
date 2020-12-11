import React, { useState, useContext } from "react";
import catalog from "./Catalog.module.css";
import Product from "Container/Product";
import { Context } from "СontextAs/Context";

const FIRST_SORT_MASSIVE = "возрастанию цены";
const SECOND_SORT_MASSIVE = "возрастанию цены";
const THIRD_SORT_MASSIVE = "возрастанию цены";
const FOURTH_SORT_MASSIVE = "возрастанию цены";

const getProducts = (chosenMassive, mass) => {
  if (chosenMassive === 1) {
    mass.sort((a, b) => b.price - a.price);
  }
  if (chosenMassive === 0) {
    mass.sort((a, b) => a.price - b.price);
  }
  if (chosenMassive === 2) {
    mass.sort(function (a, b) {
      const aName = a.title.toLowerCase(),
        bName = b.title.toLowerCase();
      if (aName < bName) return -1;
      if (aName > bName) return 1;
      return 0;
    });
  }
  if (chosenMassive === 3) {
    return mass.map((section) => {
      if (section.price < 101) {
        return (
          <Product key={section.id} section={section} index={section.id} />
        );
      } else {
        return null;
      }
    });
  } else {
    return mass.map((section) => {
      return <Product key={section.id} section={section} index={section.id} />;
    });
  }
};

function Catalog() {
  const [chosenSortMassive, setSortMass] = useState(-1);
  const valueMainMassive = useContext(Context);
  const divElement = (name, count) => (
    <div
      className={
        chosenSortMassive === count ? catalog.spanSelectBlue : catalog.spanSelect
      }
      onClick={() => {
        setSortMass(count);
      }}
    >
      {name}
    </div>
  );
  return (
    <div>
      <div className={catalog.container}>
        <div className={catalog.spanMain}>Сортировать по:</div>
        {divElement(FIRST_SORT_MASSIVE, 0)}
        {divElement(SECOND_SORT_MASSIVE, 1)}
        {divElement(THIRD_SORT_MASSIVE, 2)}
        {divElement(FOURTH_SORT_MASSIVE, 3)}
      </div>
      <div className={catalog.flexContainer}>
        {getProducts(chosenSortMassive, valueMainMassive)}
      </div>
    </div>
  );
}

export default Catalog;
