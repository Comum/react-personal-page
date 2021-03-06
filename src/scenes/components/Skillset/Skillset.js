import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import SkillElement from '../../../components/SkillElement/SkillElement'
import breakpoints from '../../../theme/breakpoints'

const SkillsetContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const getSkillsList = (skills) => {
  if (!skills.length) {
    return (
      <div />
    )
  }

  return skills.map(skill => (
    <SkillElement key={skill.id} skill={skill} />
  ))
}

const Skillset = ({ skillset }) => {
  const title = 'SKILLSET'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'assets/icons/tools_icon.png'
  const bgColour = 'secondary'
  const skillsList = getSkillsList(skillset)

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      <SkillsetContainer>
        {skillsList}
      </SkillsetContainer>
    </SectionContainer>
  )
}

Skillset.propTypes = {
  skillset: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Skillset
