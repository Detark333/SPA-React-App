import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "Container/Header";
import Main from "Container/Main";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
