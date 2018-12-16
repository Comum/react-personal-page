import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ColourContainer from '../../../components/ColourContainer/ColourContainer'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import colours from '../../../theme/colours'
import breakpoints from '../../../theme/breakpoints'
import Body from '../../../components/typography/Body'

const SectionWrapper = styled.div`
    width: calc(100% - 200px);
    padding: 50px 100px;

    @media (max-width: ${breakpoints.small}) {
        padding: 50px 40px;
    }
`

const TextWrapper = styled.div`
  color: ${colours.style.secondary};
  margin: 30px 0;
`

const CompanyWrapper = styled.div`
    color: ${colours.style.secondary};
`

const ImageContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
      cursor: pointer;
      border-bottom: 3px solid black;
  }
`

const WorksHeader = ({ name, company }) => {
    const type = 'mainTitle'
    const projectColour = 'secondary'
    const companyColour = 'tertiary'
    const companyFont = 'body1'
    const iconPath = '../assets/icons/home_icon.png'

    return (
        <ColourContainer>
            <SectionWrapper>
                <SectionTitle
                    title={name}
                    type={type}
                    colour={projectColour}
                />
                <TextWrapper>
                    <Body
                        colour={companyColour}
                        fontSize={companyFont}
                    >
                        <CompanyWrapper>
                            > {company}
                        </CompanyWrapper>
                    </Body>
                </TextWrapper>
                <Link to="/">
                    <ImageContainer>
                        <img src={iconPath} alt="" />
                    </ImageContainer>
                </Link>
            </SectionWrapper>
        </ColourContainer>
    )
}

export default WorksHeader