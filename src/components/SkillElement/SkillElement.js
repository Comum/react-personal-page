import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Subtitle from '../typography/Subtitle'
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

const SkillElement = ({ skill }) => {
  const SkillVisualFiller = styled.div`
    width: ${skill.perc}%;
    height: 12px;
    background-color: ${colours.style.primary}
  `

  return (
    <SkillContainer>
      <Subtitle
        colour="primary"
        fontSize="subtitle3"
      >{skill.tech}</Subtitle>
      <SkillVisualContainer>
        <SkillVisualFiller />
      </SkillVisualContainer>
    </SkillContainer>
  )
}

SkillElement.propTypes = {
  skill: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default SkillElement
