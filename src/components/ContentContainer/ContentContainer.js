import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import breakpoints from '../../theme/breakpoints'

const Container = styled.div`
  width: 80%;

  @media (max-width: ${breakpoints.large}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`

const ContentContainer = props => (
  <Container>
    {props.children}
  </Container>
)

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentContainer
