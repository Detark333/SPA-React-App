import React from 'react';
export const SumContext = React.createContext({
    sumMassive: [],
    addSumMassive: () => {},
    delSumMassive: () => {},
    changeItemSumMassive: () => {}
});