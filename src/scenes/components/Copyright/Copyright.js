import React from 'react'
import styled from 'styled-components'

import fonts from '../../../theme/fonts'

const CopyrightContainer = styled.div`
    text-align: center;
    font-size: ${fonts.sizes.copyright}
    padding: 10px 0;
`

const Copyright = () => (
    <CopyrightContainer>
      &copy; Miguel Ribeiro, 2018
    </CopyrightContainer>
  )

export default Copyright
