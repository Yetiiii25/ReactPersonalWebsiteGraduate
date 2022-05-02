import React from 'react'
import { CardsItemCertifications, CardLinkCertifications , CardsWrapperCertifications , CardImgCertifications , CardsInfoCertifications , CardsInfoTextCertifications } from '../styled/CardStyled';

const CardItemsCertifications = (props) => {
    return (
        <>
    <CardsItemCertifications>
        <CardLinkCertifications to={props.path}>
            < CardsWrapperCertifications >
                <CardImgCertifications                         
                    alt=''
                    src={props.src}
                />
            </ CardsWrapperCertifications>
            <CardsInfoCertifications>
                <CardsInfoTextCertifications>{props.text}</CardsInfoTextCertifications>
            </CardsInfoCertifications>
        </CardLinkCertifications>
    </CardsItemCertifications>
        </>
    )
}




export default CardItemsCertifications