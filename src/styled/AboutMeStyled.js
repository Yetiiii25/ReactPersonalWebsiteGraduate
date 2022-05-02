import styled from 'styled-components';


export const TitleSection = styled.h1`
text-align: Left;
font-size: 60px;
font-weight:700;
padding: 64px 0px 32px 0px;
@media only screen and (max-width: 576px) {
    padding-left: 1rem
}

`;


export const Cards = styled.div`
display: flex;
flex-direction: column;
height: 100%;
align-items: center;
padding: 0px 100px 100px 100px;



`;

export const Services = styled.div`
margin-top: 10px;
display:grid;
grid-template-columns: repeat(6,1fr);
gap: 20px;
text-align: center;




@media (max-width: 1068px) {
      grid-template-columns: repeat(3,1fr);

    }

@media (max-width: 768px) {
      grid-template-columns: repeat(3,1fr);
  }
`;

export const Service = styled.div`
padding: 30px;
box-shadow: 0 10px 30px rgba( 0, 0, 0, 0.1);
background-color:white;
  border-radius: 25px;

  
`;

export const Icon = styled.img`
max-width: 50px;

:hover {
  transform: scale(1.2);
  transition: all 0.2s linear;
}
`;




export const UnderlineAnimation = styled.p`
  display: inline-block;
  position: relative;
  margin-left: 20px;
  font-size: 25px;

  :after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: var(--text-color);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;


}

a, a:hover, a:focus, a:active{
    text-decoration:none;
    color: var(--text-color);
    transition: background 0.3s ease-in-out, color 0.6s ease-in-out;
  }

:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`;








export const SubTitleSection = styled.h1`
text-align: Left;
font-size: 60px;
font-weight:700;
padding: 64px 0px 32px 0px;
@media only screen and (max-width: 576px) {
    padding-left: 1rem
}
/* padding: 64px 64px 32px 64px; */

`;

export const PreTitleSection = styled.h1`
text-align: Left;
font-size: 35px;
/* padding: 64px 64px 32px 64px; */
margin-bottom:30px;
padding-left: 0.5 rem;

@media only screen and (max-width: 480px) {
    padding-left: 0.5 rem

}
`;