import React from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Header = () => {
    return (
        <div>
            <Button component={Link} to="/" variant="text" size="large">Still Stickers</Button>
            <Button component={Link} to="/basket" variant="text" size="small">Order count</Button>
            <div className="ButtonGroupСurrency">
                <ButtonGroup variant="text"  aria-label="text button group">
                    <Button>USD</Button>
                    <Button>EUR</Button>
                    <Button>CAD</Button>
                </ButtonGroup>
            </div>
            <div className="ButtonGroupSort">
                <ButtonGroup variant="outlined" size="small" aria-label="outlined button group">
                    <Button>Sort Price</Button>
                    <Button>Sort Name</Button>
                </ButtonGroup>
            </div>
            <div className="TotalAmount">
                Total Amount
            </div>
        </div>
    );
};

export default Header;