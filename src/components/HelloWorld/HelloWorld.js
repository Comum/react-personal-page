import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: blue;
`

const HelloWorld = () => {
  const greeting = 'world'

  return (
    <H1>Hello {greeting}!</H1>
  )
}

export default HelloWorld
