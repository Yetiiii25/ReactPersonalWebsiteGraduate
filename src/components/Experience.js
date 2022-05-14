import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork,MdSchool } from 'react-icons/md';
import styled from "styled-components";

const Section = styled.div`
padding: 4rem;
`;

const SubSection = styled.h1`
text-align: Left;
font-size: 60px;
font-weight:700;
padding-top: 8rem;

@media (max-width: 490px) {
    font-size: 40px;
    padding-top: 4rem;
  }
`;

const TitleSection = styled.h1`
text-align: Center;
font-size: 60px;
font-weight:700;


@media (max-width: 490px) {
    font-size: 40px;
    text-align: Center;

  }
`;


const SubTitle= styled.h1`
text-align: Center;
font-size: 20px;

@media (max-width: 490px) {
    font-size: 15px;

  }

`;

const Experience = () => {
  // Pwedeng drop down to dalawa
  // Work Experience Vertical Timeline
  // Educational Experience Vertical Timeline
  // Certifications





  return (
    
    <Section>
      <TitleSection> Qualification  </TitleSection>
      <SubTitle> My Journey  </SubTitle>
      <SubSection> Education </SubSection>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#CCCDC6', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid #CCCDC6' }}
          date="2018 - 2022"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">BS, Computer Science</h3>
          <h5 className="vertical-timeline-element-subtitle">San Sebastian College Recoletos - Manila</h5>
          <p><>&#8226;</>Best Research Paper Multi-Country Money Recognition System for Visually Impaired People was chosed as Best Research Paper in S.Y 2021 - 2022</p>
          <p><>&#8226;</>Silver Medalist - St. Augustine Academia 2021 - 2020 </p>
          <p><>&#8226;</>Bronze Medalist - St. Augustine Academia 2019 - 2020 </p>
          <p><>&#8226;</>Swimming Team Captain  2018 - 2019 </p>
          <p><>&#8226;</>Swimming Team 2018 - 2022 </p>
          <p><>&#8226;</>Special Recognition - Eloquent Speaker 2018 </p>

        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="2016 - 2018"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Senior High School</h3>
          <h5 className="vertical-timeline-element-subtitle">San Sebastian College Recoletos - Manila</h5>
          <p><>&#8226;</>Graduated with Honors</p>
          <p><>&#8226;</>Swimming Team Captain 2016 - 2018</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="2012 - 2016"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Junior High School</h3>
          <h5 className="vertical-timeline-element-subtitle">San Sebastian College Recoletos - Manila</h5>
          <p><>&#8226;</>Swimming Team Captain 2015 - 2016</p>
          <p><>&#8226;</>Swimming Team 2012 - 2016</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="2012"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Grade School</h3>
          <h5 className="vertical-timeline-element-subtitle">San Sebastian College Recoletos - Manila</h5>
          <p><>&#8226;</>Swimming Team 2011 - 2012</p>
        </VerticalTimelineElement>

      </VerticalTimeline>




      <SubSection> Work </SubSection>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#CCCDC6', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid #CCCDC6' }}
          date="February 2022 - May 2022"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Intern Software Developer</h3>
          <h5 className="vertical-timeline-element-subtitle">Raven Global Inc.</h5>
          <p><>&#8226;</>Grasp the knowledge of the fundamentals concepts,mid to advanced concepts, and the ecosystem of React JS.</p>
          <p><>&#8226;</>Developed 7+ web apps which have responsive elements using React concepts for smoother performance.</p>
          <p><>&#8226;</>Performed testing and debugging the source code using trial and error, terminal, console logs, inspect element and network.</p>
          <p><>&#8226;</>Produced and Developed different web applications using MERN stack.</p>

        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="January 2021 - Present"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Technical Support Agent</h3>
          <h4 className="vertical-timeline-element-subtitle">Super Tan Brothers · Part-time</h4>
          <p><>&#8226;</>Operated on handling hundreds of accounts per event using a remote desktop, what we do most is queueing for the listing of coins, we also do minting events for nft’s. Most of my shifts are midnight shifts starting from 9pm to 7am.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="February - December 2021"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Lead Project Coordinator</h3>
          <h4 className="vertical-timeline-element-subtitle">Muhon Constructions</h4>
          <p><>&#8226;</>Oversaw administrative tasks, communicated with stakeholders and ensured resource availability for the team.</p>
          <p><>&#8226;</>Administered Microsoft Office environment to ease work. Produced the Company Profile</p>
          <p><>&#8226;</>Provision of presentation about daily, weekly and monthly report progress to clients and the construction team</p>
          <p><>&#8226;</>Handled the full operations of multiple construction projects and foremen</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="March - May, Year '19,'18,'17,'16 "
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Swimming Instructor</h3>
          <h4 className="vertical-timeline-element-subtitle">AS Swimming Team</h4>
          <p><>&#8226;</>Instructed swimmers and coached swimming for 3 months during summers handling over hundreds of athletes and newbies.</p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="October - January 2019"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Starbucks Barista</h3>
          <h4 className="vertical-timeline-element-subtitle">Glorietta 3 store 116</h4>
          <p><>&#8226;</>Ensured customer satisfaction not only with their orders but also with how I assisted them. Made sure they experience best customer service of their day </p>
          <p><>&#8226;</>Detail-oriented in both customer and coworker orders</p>
          <p><>&#8226;</>Sustained the stores efficiency due to multiple change of managers </p>
    
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(178, 190, 181)', color: 'black', transition: 'color 0.4s ease-in-out' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(178, 190, 181)' }}
          date="May 2018"
          iconStyle={{ background: 'var(--text-color)', color: 'var(--background-color)', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Creotech Philippines Tech</h3>
          <h4 className="vertical-timeline-element-subtitle">Work Immersion</h4>
          <p><>&#8226;</>Arduino, Learned soldering, breadboard and gate logics. we also had hands on
          project, making an smart
            </p>
        </VerticalTimelineElement>

      </VerticalTimeline>


    </Section>

  )
}

export default Experience