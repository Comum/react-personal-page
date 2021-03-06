import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colours from '../../theme/colours'
import fonts from '../../theme/fonts'
import breakpoints from '../../theme/breakpoints'

const SectionTitle = (props) => {
  const SectionTitleValue = styled.div`
      width: 100%;
      color: ${colours.style[props.colour]}
      font-size: ${fonts.sizes[props.type]};

      @media (max-width: ${breakpoints.small}) {
        font-size: ${fonts.sizes.small[props.type]};
      }
  `

  const SectionTitleUnderline = styled.div`
    width: 50px;
    height: 4px;

    background-color: ${colours.style[props.colour]};
  `

  return (
    <section>
      <SectionTitleValue>{props.title}</SectionTitleValue>
      <SectionTitleUnderline />
    </section>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
}

export default SectionTitle
