import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./Configs/Global.styled";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "./Configs/BaseTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider theme = {baseTheme}>
                <App/>
                <GlobalStyle/>
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>
);

