import React from 'react'
import styled from 'styled-components'

import Subtitle2 from '../typography/Subtitle2'
import colours from '../../theme/colours'

const LastName = styled.span`
    color: ${colours.style.tertiary}
`

const NameTitle = () => (
  <Subtitle2>
    Miguel<LastName>Ribeiro</LastName>
  </Subtitle2>
)

export default NameTitle
