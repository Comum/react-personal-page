import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionTitle from '../SectionTitle/SectionTitle'
import breakpoints from '../../theme/breakpoints'

const TitleContainer = styled.div`
  width: 20%;

  @media (max-width: ${breakpoints.large}) {
    width: 40%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  margin-top: 10px;

  @media (max-width: ${breakpoints.small}) {
    margin-bottom: 20px;
  }
`

const SectionArea = props => (
  <TitleContainer>
    <SectionTitle
      title={props.title}
      type={props.type}
      colour={props.colour}
    />
    <ImageContainer>
      <img src={props.iconPath} alt="" />
    </ImageContainer>
  </TitleContainer>
)

SectionArea.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
}

export default SectionArea
