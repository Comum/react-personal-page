import React from 'react'
import styled from 'styled-components'

import Subtitle from '../typography/Subtitle'
import colours from '../../theme/colours'

const LastName = styled.span`
    color: ${colours.style.tertiary}
`

const NameTitle = () => (
  <Subtitle
    colour="secondary"
    fontSize="subtitle1"
  >
    Miguel<LastName>Ribeiro</LastName>
  </Subtitle>
)

export default NameTitle
