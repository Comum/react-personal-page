import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import WorkElement from '../../../components/WorkElement/WorkElement'

const WorksContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
`

const getWorksList = (works) => {
  if (!works.length) {
    return (
      <div />
    )
  }

  return works.map(work => (
    <WorkElement key={work.id} work={work} />
  ))
}

const Works = ({ works }) => {
  const title = 'MY WORKS'
  const type = 'sectionTitle'
  const colour = 'primary'
  const iconPath = 'assets/icons/comp_icon.png'
  const bgColour = 'secondary'
  const worksList = getWorksList(works)
console.log(works)
  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      <WorksContainer>
        {worksList}
      </WorksContainer>
    </SectionContainer>
  )
}

Works.propTypes = {
  works: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Works
