import React from 'react'
import styled from 'styled-components'

import SectionTitle from '../../../components/SectionTitle/SectionTitle'
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

const TitleContainer = styled.div`
  width: 20%;

  @media (max-width: ${breakpoints.large}) {
    width: 40%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  margin-top: 10px;

  @media (max-width: ${breakpoints.small}) {
    margin-bottom: 20px;
  }
`

const TextContainer = styled.div`
  width: 80%;

  @media (max-width: ${breakpoints.large}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`

const About = () => {
  const title = 'About'
  const type = 'sectionTitle'
  const colour = 'primary'

  return (
    <AboutContainer>
      <TitleContainer>
        <SectionTitle
          title={title}
          type={type}
          colour={colour}
        />
        <ImageContainer>
          <img src="images/icons/man_icon.png" alt="" />
        </ImageContainer>
      </TitleContainer>
      <TextContainer>
        <Subtitle1>MIGUEL RIBEIRO</Subtitle1>
        <Body1>I am a developer</Body1>
      </TextContainer>
    </AboutContainer>
  )
}

export default About
