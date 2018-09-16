import React from 'react'
import styled from 'styled-components'

import ColourContainer from '../../../components/ColourContainer/ColourContainer'
import NameTitle from '../../../components/NameTitle/NameTitle'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Body from '../../../components/typography/Body'
import colours from '../../../theme/colours'
import breakpoints from '../../../theme/breakpoints'

const TextContainer = styled.div`
  width: calc(100% - 200px);  
  padding: 30px 100px;

  @media (max-width: ${breakpoints.small}) {
    padding: 30px 40px;
  }
`

const SectionTitleWrapper = styled.div`
  margin-top: 100px;
`

const TextWrapper = styled.div`
  color: ${colours.style.secondary};
  margin: 40px 0 100px;
`

const Header = () => {
  const title = 'FRONT-END DEVELOPER'
  const type = 'mainTitle'
  const colour = 'secondary'

  return (
    <ColourContainer>
      <TextContainer>
        <NameTitle />
        <SectionTitleWrapper>
          <SectionTitle
            title={title}
            type={type}
            colour={colour}
          />
        </SectionTitleWrapper>
        <TextWrapper>
          <Body
            colour="tertiary"
            fontSize="body1"
          >
            Specializing in converting design to code
          </Body>
        </TextWrapper>
      </TextContainer>
    </ColourContainer>
  )
}

export default Header
