import React from 'react'

import ColourContainer from '../../../components/ColourContainer/ColourContainer'
import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import SectionArea from '../../../components/SectionArea/SectionArea'
import ContentContainer from '../../../components/ContentContainer/ContentContainer'

const Education = () => {
  const title = 'EDUCATION'
  const type = 'sectionTitle'
  const colour = 'secondary'
  const iconPath = 'assets/icons/edu_icon.png'

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
          content
        </ContentContainer>
      </SectionContainer>
    </ColourContainer>
  )
}

export default Education
