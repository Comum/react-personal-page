import React from 'react'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'

const Education = () => {
  const title = 'EDUCATION'
  const type = 'sectionTitle'
  const colour = 'secondary'
  const iconPath = 'assets/icons/edu_icon.png'
  const bgColour = 'primary'

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      content
    </SectionContainer>
  )
}

export default Education
