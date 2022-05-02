import styled from 'styled-components';
import {Link} from "react-router-dom";


export const Card = styled.div`
`;

export const TitleSection = styled.h1`
text-align: Left;
font-size: 60px;
font-weight:700;
padding: 4rem 4rem 0rem 4rem;
@media (max-width: 490px) {
    font-size: 40px;
    text-align: Center;
    padding: 2rem 1rem 0rem 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;

`;

export const Wrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;


export const CardsItems = styled.ul`
  margin-bottom: 24px;
  padding-left: 0rem;

  @media only screen and (min-width: 1024px) {
    display: flex;
}

`;



export const CardsItem = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  background: white;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
}
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

export const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 57%;
  overflow: hidden;

:after {
  content: attr(data-category);
  position: absolute;
  bottom: 0;
  margin-left: 10px;
  padding: 6px 8px;
  max-width: calc((100%) - 60px);
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  box-sizing: border-box;
  background-color:black;
}
`;

export const CardImg = styled.img`
 position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.6s linear;
  animation-name: fade-img;
  animation-duration: 2s;
  background: rgb(74,72,72);
  background: linear-gradient(142deg, rgba(74,72,72,1) 34%, rgba(0,0,0,1) 100%);


 :hover{
  transform: scale(1.1);
 }

`;

export const CardsInfo = styled.div`
margin: 10px;
padding: 10px;
`;

export const CardsInfoText = styled.h5`
  color: #252e48;
  font-size: 18px;
  text-align: center;
  

@media (max-width: 500px)
{
  font-size: 15px;
  text-align: center;
}
`;




export const CardsItemCertifications = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  background: white;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
}
`;



export const CardLinkCertifications = styled.a`
display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

export const CardsWrapperCertifications = styled.div`
position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;




`;

export const CardImgCertifications = styled.img`
 position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.6s linear;
  animation-name: fade-img;
  animation-duration: 2s;
  background: rgb(74,72,72);
  background: linear-gradient(142deg, rgba(74,72,72,1) 34%, rgba(0,0,0,1) 100%);

 :hover{
  transform: scale(1.2);
 }

`;

export const CardsInfoCertifications = styled.div`
  padding: 20px 30px 30px;
`;

export const CardsInfoTextCertifications = styled.h5`
  color: #252e48;
  font-size: 18px;
  text-align: center;
  

@media (max-width: 500px)
{
  font-size: 15px;
  text-align: center;
}
`;