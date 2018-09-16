import React from 'react'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'

const Works = () => {
  const title = 'MY WORKS'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'assets/icons/comp_icon.png'
  const bgColour = 'secondary'

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      Works
    </SectionContainer>
  )
}

export default Works
