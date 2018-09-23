import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import WorkImgContainer from '../WorkImgContainer/WorkImgContainer'
import WorkTechList from '../WorkTechList/WorkTechList'
import Subtitle from '../typography/Subtitle'
import breakpoints from '../../theme/breakpoints'

const WorkContainer = styled.section`
  width: 100%;
  margin: 0 0 60px 0;

  @media (min-width: ${breakpoints.large}) {
    width: calc(50% - 30px);
  }

  h2 {
    margin-top: 10px;
  }
`

const WorkElement = ({ work }) => {
  const imgPath = work.img ? work.img : ''
  const techs = work.techs ? work.techs : []

  return (
    <WorkContainer>
      <WorkImgContainer imgPath={imgPath} />
      <Subtitle
        colour="primary"
        fontSize="subtitle3"
      >
        {work.name}
      </Subtitle>
      <WorkTechList techs={techs} />
    </WorkContainer>
  )
}

WorkElement.propTypes = {
  work: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default WorkElement