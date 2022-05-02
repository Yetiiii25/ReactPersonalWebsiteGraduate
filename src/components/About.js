import React from 'react'
import { TitleSection, PreTitleSection, UnderlineAnimation, SubTitleSection, Cards, Services, Service, Icon } from '../styled/AboutMeStyled'
import { Col, Container, Row } from 'react-bootstrap';
import { Containers, Button } from '../globalStyles';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { infoObjOne } from '../pages/AboutPage/Data'

import { FaFacebookSquare } from "react-icons/fa";

const About = ({ topline,midline,bottomline,
  headline }) => {

  //About me page
  //Continuation of introduction shit
  //images/techstack
  //Social Links

  const ColoredTooltip = (info) => {
    return (
      <span style={{ color: 'yellow' }} delay={200}>
        {info.text}

      </span>)
  }


  return (

    <>
      {/* BOOTSRAP GRID */}
      <Containers>
        <TitleSection>About Me</TitleSection>
        <div className="mb-5 ps-2 h2">{headline}</div>
        <Row className="pb-5 ps-2 ">
          <Col className="col-sm-3 h3 order-lg-first order-last">
            <PreTitleSection>Connect</PreTitleSection>
            <UnderlineAnimation><a href="https://www.linkedin.com/in/deinenflores/" target="_blank" rel="noreferrer"> <>&#129042;</> LinkedIn </a></UnderlineAnimation><br />
            <UnderlineAnimation><a href="https://github.com/Yetiiii25" target="_blank" rel="noreferrer"> <>&#129042;</> GitHub</a></UnderlineAnimation> <br />
            <UnderlineAnimation><a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank" rel="noreferrer"><>&#129042;</> Email </a></UnderlineAnimation> <br />
            <UnderlineAnimation><a href="https://www.instagram.com/deinennn/" target="_blank" rel="noreferrer"><>&#129042;</> Instagram</a></UnderlineAnimation><br />
            <UnderlineAnimation><a href="https://www.facebook.com/universe25/" target="_blank" rel="noreferrer"><>&#129042;</> Facebook</a></UnderlineAnimation><br />
          </Col>
          <Col className="col-sm-9 lead mt-2">{topline}
          <Col className="mt-4">{midline}
          <Col className="mt-4">{bottomline}</Col></Col></Col>

          <SubTitleSection>Tech Stack</SubTitleSection>
          <Cards>
            <Services>
              <Tippy content={<ColoredTooltip {...infoObjOne} />}>
                <Service>
                  <Icon src="images/techstack/react.png" alt="" /> 
                </Service>
              </Tippy>
              <Tippy content={<ColoredTooltip />} delay={100}  >
                <Service>
                  <Icon src="images/techstack/java.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/netcore.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/azure.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/mssql.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/phpmyadmin.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/firebase.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/html.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/css.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/js.png" alt="" />
                </Service>
              </Tippy>

              <Tippy content={<ColoredTooltip />} delay={200}  >
                <Service>
                  <Icon src="images/techstack/bootstrap.png" alt="" />
                </Service>
              </Tippy>
            </Services>
          </Cards>


        </Row>
      </Containers>




    </>



  )
}

export default About