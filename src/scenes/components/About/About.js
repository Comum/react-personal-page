import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import SectionArea from '../../../components/SectionArea/SectionArea'
import ContentContainer from '../../../components/ContentContainer/ContentContainer'
import Body1 from '../../../components/typography/Body1'
import Subtitle1 from '../../../components/typography/Subtitle1'

const About = () => {
  const title = 'ABOUT'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'images/icons/man_icon.png'

  return (
    <SectionContainer>
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
    </SectionContainer>
  )
}

export default About
