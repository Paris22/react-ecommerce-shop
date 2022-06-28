import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Cart from "./Cart/Cart";
import Logs from "./Logs/Logs";
import Header from "./Header/Header";
import React from "react";

const main = "/"
const cart = "/cart"
const logs = "/logs"

function App() {
  return (
    <div>
        <Header/>
      <Routes>
        <Route exact path={main} element={<MainPage/>}/>
        <Route exact path={cart} element={<Cart/>}/>
        <Route exact path={logs} element={<Logs/>}/>
      </Routes>
    </div>
  );
}

export default App;
