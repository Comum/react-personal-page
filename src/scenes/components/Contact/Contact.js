import React from 'react'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'

const Contact = () => {
  const title = 'LET\'S TALTK'
  const type = 'sectionTitle'
  const colour = 'secondary'
  const iconPath = 'assets/icons/letter_icon.png'
  const bgColour = 'primary'

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      Contact
    </SectionContainer>
  )
}

export default Contact
