import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colours from '../../theme/colours'

const Container = styled.section`
  background-color: ${colours.style.primary};
`

const ColourContainer = props => (
  <Container>
    {props.children}
  </Container>
)

ColourContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ColourContainer
