import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ColourContainer from '../../../components/ColourContainer/ColourContainer'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import colours from '../../../theme/colours'
import breakpoints from '../../../theme/breakpoints'
import Body from '../../../components/typography/Body'

const SectionWrapper = styled.div`
    width: calc(100% - 200px);
    padding: 30px 100px;
    position: relative;

    @media (max-width: ${breakpoints.small}) {
        padding: 30px 40px;
    }
`

const TextWrapper = styled.div`
  color: ${colours.style.secondary};
  margin: 40px 0 100px;
`

const WorksHeader = ({ name, company }) => {
    const type = 'mainTitle'
    const projectColour = 'secondary'
    const companyColour = 'tertiary'
    const companyFont = 'body1'
    //const name = props.project ? props.project.name : '';
    //const company = props.project ? props.project.company : '';

    console.log('aqui', name, company)

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
                        {company}
                    </Body>
                </TextWrapper>
            </SectionWrapper>
        </ColourContainer>
    )
}

export default WorksHeader