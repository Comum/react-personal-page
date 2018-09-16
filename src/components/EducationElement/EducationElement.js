import React from 'react'

import Body2 from '../typography/Body2'
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
        <Body2 colour="secondary">{course.university}</Body2>
    </div>
)

export default EducationElement
