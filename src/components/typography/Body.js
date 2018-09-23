import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colours from '../../theme/colours'
import fonts from '../../theme/fonts'

const Body = (props) => {
  const colour = props.colour ? colours.style[props.colour] : colours.style.primary
  const fontSize = props.fontSize ? fonts.sizes[props.fontSize] : fonts.sizes.body1
  const marginBottom = props.marginBottom ? props.marginBottom : '0px'
  const marginTop = props.marginTop ? props.marginTop : '0px'

  const Element = styled.div`
    font-size: ${fontSize};
    color: ${colour};
    margin-bottom: ${marginBottom};
    margin-top: ${marginTop};
  `

  return (
    <Element>
      {props.children}
    </Element>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
  fontSize: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
}

Body.defaultProps = {
  colour: '',
  fontSize: '',
  marginBottom: '',
  marginTop: '',
}

export default Body
