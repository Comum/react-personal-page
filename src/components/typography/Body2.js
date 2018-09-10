import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colours from '../../theme/colours'
import fonts from '../../theme/fonts'

const Body2 = (props) => {
  const colour = props.colour ? colours.style[props.colour] : colours.style.tertiary
  const Element = styled.div`
    font-size: ${fonts.sizes.body2};
    color: ${colour};
    margin: 0;
  `

  return (
    <Element>
      {props.children}
    </Element>
  )
}

Body2.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
}

Body2.defaultProps = {
  colour: '',
}

export default Body2
