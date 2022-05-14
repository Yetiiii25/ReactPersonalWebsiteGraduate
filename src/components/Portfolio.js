import React, {useEffect} from 'react'
import {Card, TitleSection, CardsContainer, Wrapper , CardsItems} from '../styled/CardStyled';
import CardItems from '../components/CardItems'
import {portfolioObjEight, portfolioObjFive, portfolioObjFour, portfolioObjOne, portfolioObjSeven, portfolioObjSix, portfolioObjThree, portfolioObjTwo} from '../pages/PortfolioPage/CardsData';
import ScrollAnimation from 'react-animate-on-scroll';

const Portfolio = () => {
    // projects


     
  return (

<>
<Card>
    <TitleSection>My Recent Projects</TitleSection>
    <CardsContainer>
        <Wrapper>
            <CardsItems>
                <CardItems {...portfolioObjOne}/>
                <CardItems {...portfolioObjTwo}/>
            </CardsItems>
            <CardsItems>
                <CardItems {...portfolioObjThree}/>
                <CardItems {...portfolioObjFour}/>
            </CardsItems>
            <CardsItems>
                <CardItems {...portfolioObjFive}/>
                <CardItems {...portfolioObjSix} />
            </CardsItems>
            <CardsItems>
                <CardItems {...portfolioObjSeven}/>
                <CardItems {...portfolioObjEight} />
            </CardsItems>
        </Wrapper>
    </CardsContainer>
</Card>
</>


  )
}

export default Portfolio