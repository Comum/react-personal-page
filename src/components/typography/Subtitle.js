import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colours from '../../theme/colours'
import fonts from '../../theme/fonts'

const Subtitle = (props) => {
  const colour = props.colour ? colours.style[props.colour] : colours.style.primary
  const fontSize = props.fontSize ? fonts.sizes[props.fontSize] : fonts.sizes.subtitle
  const marginBottom = props.marginBottom ? props.marginBottom : '0px'

  const Element = styled.h2`
    font-size: ${fontSize};
    color: ${colour};
    margin: 0;
    margin-bottom: ${marginBottom}
  `
  return (
    <Element>
      {props.children}
    </Element>
  )
}

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
  fontSize: PropTypes.string,
  marginBottom: PropTypes.string,
}

Subtitle.defaultProps = {
  colour: '',
  fontSize: '',
  marginBottom: '',
}

export default Subtitle
