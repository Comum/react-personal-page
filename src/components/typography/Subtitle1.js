import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colours from '../../theme/colours'
import fonts from '../../theme/fonts'

const Subtitle1 = (props) => {
  const colour = props.colour ? colours.style[props.colour] : colours.style.tertiary
  const Element = styled.h2`
    font-size: ${fonts.sizes.subtitle1};
    color: ${colour};
    margin: 0;
  `

  return (
    <Element>
      {props.children}
    </Element>
  )
}

Subtitle1.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
}

Subtitle1.defaultProps = {
  colour: '',
}

export default Subtitle1
