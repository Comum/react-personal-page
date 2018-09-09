import React from 'react'
import styled from 'styled-components'

import breakpoints from '../../theme/breakpoints'

const Container = styled.section`
  width: calc(100% - 200px);
  padding: 60px 100px;

  display: flex;
  flex-direction: row;

  @media (max-width: ${breakpoints.large}) {
    width: calc(100% - 60px);
    padding: 60px 30px;
  }

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`

const SectionContainer = props => (
  <Container>
    {props.children}
  </Container>
)

export default SectionContainer
