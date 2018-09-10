import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colours from '../../theme/colours'
import fonts from '../../theme/fonts'

const LinkElement = styled.span`
  color: ${colours.style.secondary}
  font-size: ${fonts.sizes.subtitle1}
  font-weight: bold;
  margin-left: 16px;

  &:hover {
    color: ${colours.style.tertiary}
  }
`

const Link = ({ path }) => (
  <a style={{ textDecoration: 'none' }} href={path} rel="noopener noreferrer" target="_blank">
    <LinkElement>&#x21AA;</LinkElement>
  </a>
)

Link.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Link
