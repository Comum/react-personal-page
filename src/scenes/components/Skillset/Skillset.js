import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import SectionArea from '../../../components/SectionArea/SectionArea'
import ContentContainer from '../../../components/ContentContainer/ContentContainer'
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

const Skillset = ({skillset}) => {
  const title = 'SKILLSET'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'assets/icons/tools_icon.png'
  const skillsList = getSkillsList(skillset)

  return (
    <SectionContainer>
        <SectionArea
          title={title}
          type={type}
          colour={colour}
          iconPath={iconPath}
        />
        <ContentContainer>
          <SkillsetContainer>
            {skillsList}
          </SkillsetContainer>
        </ContentContainer>
      </SectionContainer>
  )
}

export default Skillset
