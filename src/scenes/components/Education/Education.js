import React from 'react'
import PropTypes from 'prop-types'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import EducationElement from '../../../components/EducationElement/EducationElement'

const getEducationList = (education) => {
  if (!education.length) {
    return (
      <div />
    )
  }

  return education.map(course => (
    <EducationElement key={course.id} course={course} />
  ))
}

const Education = ({ education }) => {
  const title = 'EDUCATION'
  const type = 'sectionTitle'
  const colour = 'secondary'
  const iconPath = 'assets/icons/edu_icon.png'
  const bgColour = 'primary'
  const educationList = getEducationList(education)

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      {educationList}
    </SectionContainer>
  )
}

Education.propTypes = {
  education: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Education
