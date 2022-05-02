import React from 'react'
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { Containers, Button } from '../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,InfoImgColumn
} from '../styled/HeroStyled';

const Hero = ({  
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start}) => {

        // Image ko
        // Introduction
        // Recent Projects

  return (
    <>
      <InfoSec>
        <Containers>
          <InfoRow imgStart={imgStart}>

          <InfoImgColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoImgColumn>

            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <Link to='/about'>
                  
                  <Button big fontBig primary={primary}> <FaCode className="icon" style={{marginRight:5}}/>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            
          </InfoRow>
        </Containers>
      </InfoSec>
    </>
  )
}

export default Hero