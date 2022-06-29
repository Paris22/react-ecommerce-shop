import React from 'react';
import Card from "../Cards/Card";
import Image from "mui-image";
import {Input} from "@mui/material";
import {MarginHeader} from "../Configs/Global.styled";


const MainPage = () => {
    return (
        <div className="Content">
            <MarginHeader>
                <div className="ContentHeader">
                    <h1>Все товары</h1>
                    <div className="Search-block">
                        <Image src="" alt="SearchButton"/>
                        <Input placeholder="Поиск..."/>
                    </div>
                </div>
                <Card/>
            </MarginHeader>
        </div>
    );
};

export default MainPage;