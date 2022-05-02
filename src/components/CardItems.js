import React from 'react'
import {CardsItem, CardLink, CardsWrapper, CardImg, CardsInfo,CardsInfoText} from '../styled/CardStyled';

const CardItems = (props) => {



  return (
    <>
    <CardsItem>
        <CardLink to={props.path}>
            < CardsWrapper data-category={props.label}>
                <CardImg                         
                    alt=''
                    src={props.src}
                />
            </ CardsWrapper>
            <CardsInfo>
                <CardsInfoText>{props.text}</CardsInfoText>
            </CardsInfo>
        </CardLink>
    </CardsItem>
</>
  )
}








export default CardItems