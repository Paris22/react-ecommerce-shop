import React from 'react';
import Image from "mui-image";
import Button from "@mui/material/Button";
import {FlexWrapper, FlexWrapperDirection} from "../Configs/FlexTheme.styled";
import {CardWrapper} from "./Card.styled";
import {PaddingWrapper} from "../Configs/Global.styled";
import {Grid} from "@mui/material";

const Card = ({index}) => {
    return (
        <Grid item
              xs={2}
              sm={2}
              md={2}
              key={index}
        >
            <CardWrapper>
                <FlexWrapper
                    justify='center'
                    align='center'
                >
                    <Image
                        src=""
                        height={100}
                        width={100}
                        alt="Card-Image"
                    />
                </FlexWrapper>
                <span>ProductName</span>
                <FlexWrapperDirection
                    justify="space-between"
                    direction='column'
                >
                    <FlexWrapper>
                        <span>Цена: <b>499р.</b></span>
                    </FlexWrapper>
                    <PaddingWrapper padding='10px'>
                        <FlexWrapper justify='center'>
                            <Button
                                variant="outlined"
                                size="small"
                            >
                                Добавить
                            </Button>
                        </FlexWrapper>
                    </PaddingWrapper>
                </FlexWrapperDirection>
            </CardWrapper>
        </Grid>
    );
};

export default Card;