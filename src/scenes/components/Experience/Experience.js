import React from 'react'

import ColourContainer from '../../../components/ColourContainer/ColourContainer'
import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import SectionArea from '../../../components/SectionArea/SectionArea'
import ContentContainer from '../../../components/ContentContainer/ContentContainer'

const Experience = () => {
  const title = 'EXPERIENCE'
  const type = 'sectionTitle'
  const colour = 'secondary'
  const iconPath = 'images/icons/exp_icon.png'

  return (
    <ColourContainer>
        <SectionContainer>
        <SectionArea
          title={title}
          type={type}
          colour={colour}
          iconPath={iconPath}
        />
        <ContentContainer>
          I am the content
        </ContentContainer>
      </SectionContainer>
    </ColourContainer>
  )
}

export default Experience