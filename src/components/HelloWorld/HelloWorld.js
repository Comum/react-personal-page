import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: blue;
`

export default class HelloWorld extends Component {
  render() {
    const greeting = 'world';

    return (
      <H1>Hello {greeting}!!</H1>
    )
  }
}
