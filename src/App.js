import './App.styled';
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Cart from "./Cart/Cart";
import Logs from "./Logs/Logs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import React from "react";
import {MAIN, CART, LOGS} from "./Configs/constants";
import {AppStyled} from "./App.styled";
import {FlexGrowWrapper} from "./Configs/FlexTheme.styled";

function App() {
    return (
        <AppStyled>
            <Header/>
            <FlexGrowWrapper>
                <Routes>
                    <Route exact path={MAIN} element={<MainPage/>}/>
                    <Route exact path={CART} element={<Cart/>}/>
                    <Route exact path={LOGS} element={<Logs/>}/>
                </Routes>
            </FlexGrowWrapper>
            <Footer/>
        </AppStyled>
    );
}

export default App;
