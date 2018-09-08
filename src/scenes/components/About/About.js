import React from 'react'
import styled from 'styled-components'

import SectionArea from '../../../components/SectionArea/SectionArea'
import Body1 from '../../../components/typography/Body1'
import Subtitle1 from '../../../components/typography/Subtitle1'
import breakpoints from '../../../theme/breakpoints'

const AboutContainer = styled.section`
  width: calc(100% - 200px);
  padding: 60px 100px;

  display: flex;
  flex-direction: row;

  @media (max-width: ${breakpoints.large}) {
    width: calc(100% - 60px);
    padding: 60px 30px;
  }

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`

const ContentContainer = styled.div`
  width: 80%;

  @media (max-width: ${breakpoints.large}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }

  h2 {
    margin-bottom: 8px;
  }

  div {
    margin-bottom: 16px;
  }
`

const About = () => {
  const title = 'ABOUT'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'images/icons/man_icon.png'

  return (
    <AboutContainer>
      <SectionArea
        title={title}
        type={type}
        colour={colour}
        iconPath={iconPath}
      />
      <ContentContainer>
        <Subtitle1>MIGUEL RIBEIRO</Subtitle1>
        <Body1>My name is Miguel Ribeiro (as you can imagine) and I am a web engineer.</Body1>
        <Body1>I focus my work in replicating design as pixel perfect as can be with the intended functionality.</Body1>
        <Body1>Recently (for the past two years) I've decided to focus on front-end work, so I code mostly in JavaScript (vanilla, or using frameworks such as AngularJS and React).</Body1>
        <Body1>In another life, I used to code in PHP and do some database work as well.</Body1>
      </ContentContainer>
    </AboutContainer>
  )
}

export default About
