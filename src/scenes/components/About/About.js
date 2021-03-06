import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import Body from '../../../components/typography/Body'
import Subtitle from '../../../components/typography/Subtitle'

const TitleContainer = styled.div`
  margin-bottom: 8px;
`

const TextContainer = styled.div`
  div {
    margin-bottom: 16px;
  }
`

const About = () => {
  const title = 'ABOUT'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'assets/icons/man_icon.png'
  const bgColour = 'secondary'

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      <TitleContainer>
        <Subtitle
          colour="tertiary"
          fontSize="subtitle1"
        >
          MIGUEL RIBEIRO
        </Subtitle>
      </TitleContainer>
      {/* eslint-disable max-len */}
      <TextContainer>
        <Body
          colour="tertiary"
          fontSize="Body1"
        >
          My name is Miguel Ribeiro (as you can imagine) and I am a web engineer.
        </Body>
        <Body
          colour="tertiary"
          fontSize="Body1"
        >
          I focus my work in replicating design as pixel perfect as can be, with the intended functionality.
        </Body>
        <Body
          colour="tertiary"
          fontSize="Body1"
        >
          Recently (for the past two years) I&apos;ve decided to focus on front-end work, so I code mostly in JavaScript (vanilla, or using frameworks such as AngularJS and React).
        </Body>
        <Body
          colour="tertiary"
          fontSize="Body1"
        >
          In another life, I used to code in PHP and do some database work as well.
        </Body>
      </TextContainer>
      {/* eslint-enable max-len */}
    </SectionContainer>
  )
}

export default About
