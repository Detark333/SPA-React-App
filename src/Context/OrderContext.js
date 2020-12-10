import React from "react";
export const OrderContext = React.createContext({
  card: {},
  userInformation: {},
  adressInformation: {},
  addCardInformation: () => {},
  addAdressInformation: () => {}
});
