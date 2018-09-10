import React from 'react'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import SectionArea from '../../../components/SectionArea/SectionArea'
import ContentContainer from '../../../components/ContentContainer/ContentContainer'

const Skillset = ({skillset}) => {
  const title = 'SKILLSET'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'assets/icons/man_icon.png'
console.log(skillset)
  return (
    <SectionContainer>
        <SectionArea
          title={title}
          type={type}
          colour={colour}
          iconPath={iconPath}
        />
        <ContentContainer>
          Content
        </ContentContainer>
      </SectionContainer>
  )
}

export default Skillset
