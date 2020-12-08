import React from "react";
export const OrderContext = React.createContext({
  card: {},
  userInformation: {},
  adressInformation: {},
  addCardNameInformation: () => {},
  addCardNumberInformation: () => {},
  addCardCvvInformation: () => {},
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
