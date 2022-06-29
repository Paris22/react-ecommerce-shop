import React from 'react';
import Card from "../Cards/Card";
import Image from "mui-image";
import {Input} from "@mui/material";
import {MarginWrapper, PaddingWrapper} from "../Configs/Global.styled";
import {FlexTheme} from "../Configs/DirectionTheme.styled";
import {Grid} from "@mui/material";
import Search from "../img/search.svg"

let N = 12;

const MainPage = () => {
    return (
        <div className="Content">
            <MarginWrapper>
                    <h1>Все товары</h1>
                    <PaddingWrapper>
                        <FlexTheme align="center">
                            <Image src={Search} height={25} width={25} alt="SearchButton"/>
                            <MarginWrapper>
                                <Input placeholder="Поиск..."/>
                            </MarginWrapper>
                        </FlexTheme>
                    </PaddingWrapper>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {Array.from(Array(N)).map((_, i) => (
                        <Grid item xs={6} sm={2} md={2} key={i}>
                            <Card/>
                        </Grid>
                    ))}
                </Grid>
            </MarginWrapper>
        </div>
    );
};

export default MainPage;