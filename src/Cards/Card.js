import React from 'react';
import Image from "mui-image";
import Button from "@mui/material/Button";
import {FlexTheme} from "../Configs/DirectionTheme.styled";
import {CardWrapper} from "./Card.styled";

const Card = () => {
    return (
        <CardWrapper>
            <FlexTheme justify="center">
                <Image src="" height={100} width={100} alt="Card-Image"/>
            </FlexTheme>
                <span>ProductName</span>
                <FlexTheme justify="space-between" align="center">
                    <FlexTheme>
                        <span>Цена: </span>
                        <b>499 р.</b>
                    </FlexTheme>
                        <Button variant="outlined" size="small">Добавить</Button>
                </FlexTheme>
        </CardWrapper>
    );
};

export default Card;