import React from "react";
export const OrderContext = React.createContext({
  card: {},
  userInformation: {},
  adressInformation: {},
  addCardNameInformation: () => {},
  addCardNumberInformation: () => {},
  addCardCVVInformation: () => {},
  addCardMonthInformation: () => {},
  addCardDayInformation: () => {},
  addUserNameInformation: () => {},
  addUserSecondNameInformation: () => {},
  addUserThirdNameInformation: () => {},
  addUserSeriesPassportInformation: () => {},
  addUserNumberPassportInformation: () => {},
  addUserDateExtraditionInformation: () => {},
  addAdressInformation: () => {},
});
