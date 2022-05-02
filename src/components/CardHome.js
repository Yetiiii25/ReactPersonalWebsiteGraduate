import React from 'react'
import { Link } from 'react-router-dom';
import {Card, TitleSection, CardsContainer, Wrapper , CardsItems} from '../styled/CardStyled';
import CardItems from '../components/CardItems'
import {portfolioObjFive, portfolioObjFour, portfolioObjOne, portfolioObjThree, portfolioObjTwo} from '../pages/PortfolioPage/CardsData';
import CardsItemsCertifications from '../components/CardItemsCertifications'
import { experienceObjEight, experienceObjFive, experienceObjFour, experienceObjOne, experienceObjThree, experienceObjTwo } from '../pages/ExperiencePage/ExperienceData';
import { ButtonLink } from '../globalStyles';
import { BsArrow90DegDown } from "react-icons/bs";
import ScrollAnimation from 'react-animate-on-scroll';

const CardHome = () => {



  return (
    <>
    <Card>
<ScrollAnimation             
            animateIn="bounceInRight"
            initiallyVisible={false}
            animateOnce={true}
            duration={0.6}
            >
        <TitleSection>Featured Projects</TitleSection>
</ScrollAnimation>


<ScrollAnimation   ScrollAnimation             
            animateIn="bounceInLeft"
            initiallyVisible={false}
            animateOnce={true}
            duration={0.3}
            >
        <Link to='/portfolio'><ButtonLink>See Portfolio <BsArrow90DegDown className="icon"  fontSize="1.5em" style={{marginLeft:3,marginBottom:15, transform: 'rotate(180deg)'}} /></ButtonLink></Link>
        </ScrollAnimation>      
        
        <ScrollAnimation   ScrollAnimation             
            animateIn="fadeIn"
            initiallyVisible={false}
            animateOnce={true}
            duration={2}
            >
        <CardsContainer>
            <Wrapper>
                <CardsItems>
                    <CardItems {...portfolioObjOne} />
                    <CardItems {...portfolioObjTwo}/>
                </CardsItems>
                <CardsItems>
                    <CardItems {...portfolioObjThree}/>
                    <CardItems {...portfolioObjFour}/>
                    <CardItems {...portfolioObjFive}/>
                </CardsItems>
            </Wrapper>
        </CardsContainer>
</ScrollAnimation>
        

    </Card>

    <Card>

    <ScrollAnimation             
            animateIn="bounceInRight"
            initiallyVisible={false}
            animateOnce={true}
            duration={0.6}
            >
        <TitleSection>Certifications</TitleSection>
        </ScrollAnimation>


        <ScrollAnimation   ScrollAnimation             
            animateIn="bounceInLeft"
            initiallyVisible={false}
            animateOnce={true}
            duration={0.3}
            >
        <Link to='/experience'><ButtonLink>See Experiences <BsArrow90DegDown className="icon"  fontSize="1.5em" style={{marginLeft:3,marginBottom:15, transform: 'rotate(180deg)'}} /></ButtonLink></Link>
        </ScrollAnimation>
        <CardsContainer>
            <Wrapper>
            <ScrollAnimation   ScrollAnimation             
            animateIn="fadeIn"
            initiallyVisible={false}
            animateOnce={true}
            duration={2}
            >
                <CardsItems>
                    <CardsItemsCertifications {...experienceObjOne}/>     
                    <CardsItemsCertifications {...experienceObjEight}/>           
                    <CardsItemsCertifications {...experienceObjTwo}/>                                    
                </CardsItems>
                <CardsItems>
                    <CardsItemsCertifications {...experienceObjThree}/>            
                    <CardsItemsCertifications {...experienceObjFour}/>     
                    <CardsItemsCertifications {...experienceObjFive}/>  
                            
                </CardsItems>
                </ScrollAnimation>
            </Wrapper>
        </CardsContainer>
    </Card>
    </>
  )
}

export default CardHome