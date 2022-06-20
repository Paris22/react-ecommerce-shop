import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Basket from "./Basket/Basket";
import Logs from "./Logs/Logs";
import Header from "./Header/Header";
import React from "react";

function App() {
  return (
    <div>
        <Header/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/basket" element={<Basket/>}/>
        <Route exact path="/logs" element={<Logs/>}/>
      </Routes>
    </div>
  );
}

export default App;
