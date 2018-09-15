import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionArea from '../SectionArea/SectionArea'
import ContentContainer from '../ContentContainer/ContentContainer'
import breakpoints from '../../theme/breakpoints'
import colours from '../../theme/colours'

const SectionContainer = props => {
  const Container = styled.section`
    width: calc(100% - 200px);
    padding: 60px 100px;

    display: flex;
    flex-direction: row;

    background-color: ${colours.style[props.bgColour]}

    @media (max-width: ${breakpoints.large}) {
      width: calc(100% - 60px);
      padding: 60px 30px;
    }

    @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    }
`
  return (
    <Container>
      <SectionArea
        title={props.title}
        type={props.type}
        colour={props.colour}
        iconPath={props.iconPath}
      />
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </Container>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionContainer
