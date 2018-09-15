import React from 'react'
import styled from 'styled-components'

import Subtitle3 from '../typography/Subtitle3'
import colours from '../../theme/colours'
import breakpoints from '../../theme/breakpoints'

const SkillContainer = styled.div`
  width: 100%;
  height: 70px;

  h2 {
    margin-bottom: 10px;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 48%;
  }
`

const SkillVisualContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${colours.style.primaryThin}
`

const SkillElement = ({skill}) => {
  const SkillVisualFiller = styled.div`
    width: ${skill.perc}%;
    height: 12px;
    background-color: ${colours.style.primary}
  `

  return (
    <SkillContainer>
      <Subtitle3>{skill.tech}</Subtitle3>
      <SkillVisualContainer>
        < SkillVisualFiller />
      </SkillVisualContainer>
    </SkillContainer>
  )
}

export default SkillElement
