import React from 'react'
import styled from 'styled-components'

import breakpoints from '../../theme/breakpoints'

const Container = styled.div`
  width: 80%;

  @media (max-width: ${breakpoints.large}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }

  h2 {
    margin-bottom: 8px;
  }

  div {
    margin-bottom: 16px;
  }
`

const ContentContainer = props => (
    <Container>
        {props.children}
    </Container>
)

export default ContentContainer
