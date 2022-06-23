import React from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
    ButtonGroupCurrency,
    ButtonGroupSort,
    LeftSideHeader,
    RightSideHeader,
    TotalAmount,
    UpperHeader
} from "./Header.styled";
import Logo from "../img/Logo.png"
import Image from "mui-image";

const Header = () => {
    return (
        <UpperHeader>
            <LeftSideHeader>
                <Image src={Logo} height={75} width={75} alt="Logo"/>
                <Button component={Link} to="/" variant="text" size="large">Still Stickers</Button>
            </LeftSideHeader>
            <RightSideHeader>
                <ButtonGroupSort>
                    <ButtonGroup variant="outlined" size="small" aria-label="outlined button group">
                        <Button>Sort Price</Button>
                        <Button>Sort Name</Button>
                    </ButtonGroup>
                </ButtonGroupSort>
                <ButtonGroupCurrency>
                    <ButtonGroup variant="text"  aria-label="text button group">
                        <Button>USD</Button>
                        <Button>EUR</Button>
                        <Button>CAD</Button>
                    </ButtonGroup>
                </ButtonGroupCurrency>
                <Button component={Link} to="/basket" variant="text" size="small">Order count</Button>
                <TotalAmount>
                    Total Amount
                </TotalAmount>
            </RightSideHeader>
        </UpperHeader>
    );
};

export default Header;