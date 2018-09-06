import React from 'react'
import styled from 'styled-components'

import colours from '../../theme/colours'

const Container = styled.div`
  background-color: ${colours.gradient.start};
  background-image: linear-gradient(to bottom right, ${colours.gradient.start}, ${colours.gradient.end});
`

const GradientContainer = props => (
  <Container>
    {props.children}
  </Container>
)

export default GradientContainer
