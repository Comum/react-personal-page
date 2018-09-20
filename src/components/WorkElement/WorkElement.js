import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colours from '../../theme/colours'
import fonts from '../../theme/fonts'
import breakpoints from '../../theme/breakpoints'

const WorkContainer = styled.section`
  width: 100%;
  margin: 0 0 20px 0;

  border: 1px solid ${colours.style.tertiary};
  border-radius: 5px;

  @media (min-width: ${breakpoints.large}) {
    width: calc(50% - 10px);
  }

  &:hover {
    opacity: 0.6;
  }
`

const WorkElement = ({ work }) => (
  <WorkContainer>
    {work.name}
  </WorkContainer>
)

WorkElement.propTypes = {
  work: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default WorkElement
