import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colours from '../../theme/colours'

const TechContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const TechElement = styled.div`
  padding: 8px 10px;
  margin: 10px 10px 0 0;

  border-radius: 5px;
  border: 1px solid ${colours.style.quaternary};
  color: ${colours.style.quaternary};
`

const getTechList = (techs) => {
  if (!techs.length) {
    return (
      <div />
    )
  }

  return techs.map(tech => (
    <TechElement key={tech.id}>
      {tech.name}
    </TechElement>
  ))
}

const WorkTechList = ({ techs }) => {
  const techList = getTechList(techs)

  return (
    <TechContainer>
      {techList}
    </TechContainer>
  )
}

WorkTechList.propTypes = {
  techs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default WorkTechList
