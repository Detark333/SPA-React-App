import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "Container/Cart";
import Order from "Container/Order";
import Catalog from "Container/Catalog";
import { Context } from "СontextAs/Context";
import { SumContext } from "СontextAs/SumContext";
import { OrderContext } from "СontextAs/OrderContext";
import {SECTIONS} from "@/Constants";

class Main extends React.Component {
  state = {
    massiveCart: [],
    sections: SECTIONS,
    sum: [],
    card: {
      cardName: "xxxxx xxx",
      cardNumber: "0000000000000000",
      cardMonth: "xx",
      cardDay: "xx",
      cardCvv: "CVV",
    },
    userInformation: {
      secondName: "",
      name: "",
      thirdName: "",
      seriesPassport: "",
      numberPassport: "",
      dateExtradition: "",
    },
    adressInformation: {},
  };
  changeOrderInformation = (nameChange, nameState, classField) => {
    const massive = this.state[classField];
    massive[nameState] = nameChange;
    this.setState({
      massive,
    });
  };
  render() {
    return (
      <div>
        <Context.Provider value={this.state.sections}>
          <SumContext.Provider
            value={{
              sumMassive: this.state.sum,
              addSumMassive: (id, name, price) => {
                const sumMassive = this.state.sum;
                sumMassive.push({
                  id: id,
                  name: name,
                  price: price,
                  priceCart: price,
                  count: 1,
                });
                this.setState({
                  sum: sumMassive,
                });
              },
              delSumMassive: (id) => {
                const sumMassive = this.state.sum;
                sumMassive.forEach((item, index) => {
                  if (item.id === id) {
                    sumMassive.splice(index, 1);
                  }
                });
                this.setState({
                  sum: sumMassive,
                });
              },
              changeItemSumMassive: (id, NewPrice, NewCount) => {
                const sumMassive = this.state.sum;
                sumMassive.forEach((item) => {
                  if (item.id === id) {
                    item.priceCart = NewPrice;
                    item.count = NewCount;
                  }
                });
                this.setState({
                  sum: sumMassive,
                });
              },
            }}
          >
            <OrderContext.Provider
              value={{
                card: this.state.card,
                userInformation: this.state.userInformation,
                addCardInformation: (name, nameMethod, nameState) => {
                  this.changeOrderInformation(name, nameMethod, nameState);
                },
                addAdressInformation: (marker) => {
                  this.setState({
                    adressInformation: marker,
                  });
                },
              }}
            >
              <Switch>
                <Route path="/" exact component={Catalog} />
                <Route path="/cart" component={Cart} />
                <Route path="/order" component={Order} />
                <Redirect from="*" to="/" />
              </Switch>
            </OrderContext.Provider>
          </SumContext.Provider>
        </Context.Provider>
      </div>
    );
  }
}

export default Main;
