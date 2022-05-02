import React from 'react'
import {Card, TitleSection, CardsContainer, Wrapper , CardsItems} from '../styled/CardStyled';

import CardsItemsCertifications from '../components/CardItemsCertifications'
import { experienceObjEight, experienceObjFive, experienceObjFour, experienceObjOne, experienceObjSeven, experienceObjSix, experienceObjThree, experienceObjTwo } from '../pages/ExperiencePage/ExperienceData';


const Certifications = () => {
    
  return (

        <Card>
        <TitleSection>Certifications</TitleSection>
        <CardsContainer>
            <Wrapper>
                <CardsItems>
                    <CardsItemsCertifications {...experienceObjOne}/>            
                    <CardsItemsCertifications {...experienceObjTwo}/>                                    
                </CardsItems>
                <CardsItems>
                    <CardsItemsCertifications {...experienceObjThree}/>            
                    <CardsItemsCertifications {...experienceObjFour}/>                                    
                </CardsItems>
                <CardsItems>
                    <CardsItemsCertifications {...experienceObjFive}/>            
                    <CardsItemsCertifications {...experienceObjSix}/>                                    
                </CardsItems>
                <CardsItems>
                    <CardsItemsCertifications {...experienceObjSeven}/>            
                    <CardsItemsCertifications {...experienceObjEight}/>                                    
                </CardsItems>
            </Wrapper>
        </CardsContainer>
    </Card>

  )
}

export default Certifications