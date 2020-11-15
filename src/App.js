import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import Main from './Components/Main/Main.js'
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Main/>
    </BrowserRouter>
  );
}

export default App;
