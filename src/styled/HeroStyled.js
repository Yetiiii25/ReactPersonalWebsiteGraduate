import styled from 'styled-components';

export const InfoSec = styled.div`

  padding: 80px 0;
  color: var(--text-color);
  transition: background 0.3s ease-in-out, color 0.6s ease-in-out;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};


`;

export const InfoColumn = styled.div`

  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 40%;
  flex-basis: 40%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    text-align:center;
    display: flex;
    justify-content: center;
  }
`;

export const InfoImgColumn = styled.div`
  /* margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px; */
  flex: 1;
  max-width: 60%;
  flex-basis: 60%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
  
`;

export const TextWrapper = styled.div`
  max-width: 700px;
  /* padding-top: 0;
  padding-bottom: 60px; */

  @media screen and (max-width: 768px) {
    /* padding-bottom: 65px; */
  }
`;

export const ImgWrapper = styled.div`
  /* max-width: 555px; */
  padding-bottom:20px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;


export const Img = styled.img`
  max-width: 100%;
  height: auto;
  
  /* padding: 0px; */
  /* vertical-align: middle; */
  /* display: inline-block; */
  /* max-height: 500px; */
  /* padding-right: 0; */
  /* width: 100%; */

  
`;

export const TopLine = styled.div`
  color: var(--text-color);
  transition: background 0.3s ease-in-out, color 0.6s ease-in-out;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;

  font-size: 45px;
  line-height: 1.1;
  font-weight: 600;
  color: var(--text-color);
  transition: background 0.3s ease-in-out, color 0.6s ease-in-out;

  @media (max-width: 490px) {
    font-size: 25px;
    text-align: center;
  }

`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: var(--text-color);
  transition: background 0.3s ease-in-out, color 0.6s ease-in-out;

  @media (max-width: 490px) {
    font-size: 14px;
    text-align: center;
  }

`;
