import React, {useState} from 'react';
import Image from "mui-image";
import Button from "@mui/material/Button";
import {FlexWrapper, FlexWrapperCard, FlexWrapperDirection} from "../Configs/FlexTheme.styled";
import {CardWrapper} from "./Card.styled";
import {BoldText} from "../Configs/Global.styled";
import {Grid} from "@mui/material";

const Card = ({index}) => {

    const [productAmount, setProductAmount] = useState(0)

    const addProduct = () => {
        setProductAmount(prevProductAmount => prevProductAmount + 1)
    }

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
                <BoldText>ProductName</BoldText>
                <FlexWrapperDirection
                    justify="space-between"
                    direction='column'
                >
                    <FlexWrapper>
                        <FlexWrapperCard direction='column'>
                            <BoldText>Цена: 499р.</BoldText>
                            <BoldText>Кол-во: {productAmount}</BoldText>
                        </FlexWrapperCard>
                    </FlexWrapper>
                    <FlexWrapper align='flex-end' justify='center'>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={addProduct}
                        >
                            Добавить
                        </Button>
                    </FlexWrapper>
                </FlexWrapperDirection>
            </CardWrapper>
        </Grid>
    );
};

export default Card;