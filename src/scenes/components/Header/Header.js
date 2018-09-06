import React from 'react'
import styled from 'styled-components'

import NameTitle from '../../../components/NameTitle/NameTitle'
import GradientContainer from '../../../components/GradientContainer/GradientContainer'

// const GradientContainer = styled.div`
//   background-color: grey;
//   background-image: linear-gradient(to bottom right, grey, darkgrey);
// `

const Header = () => {
  return (
    <GradientContainer>
      <NameTitle />
    </GradientContainer>
  )
}

export default Header
