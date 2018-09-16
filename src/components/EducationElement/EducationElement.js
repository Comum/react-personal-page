import React from 'react'
import PropTypes from 'prop-types'

import Body from '../typography/Body'
import Subtitle from '../typography/Subtitle'

const EducationElement = ({ course }) => (
  <div>
    <Subtitle
      colour="secondary"
      fontSize="subtitle4"
      marginBottom="10px"
    >
      {course.year}
    </Subtitle>
    <Subtitle
      colour="secondary"
      fontSize="subtitle2"
      marginBottom="5px"
    >
      {course.course}
    </Subtitle>
    <Body
      colour="secondary"
      fontSize="body2"
      marginBottom="30px"
    >
      {course.university}
    </Body>
  </div>
)

EducationElement.propTypes = {
  course: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default EducationElement
