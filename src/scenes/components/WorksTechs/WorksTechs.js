import React from 'react'
import styled from 'styled-components'

import colours from '../../../theme/colours'
import SectionContainer from '../../../components/SectionContainer/SectionContainer'

const TechContainer = styled.div`
    margin-top: 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`

const TechElement = styled.div`
    padding: 8px 10px;
    margin: 10px 10px 0 0;

    border-radius: 5px;
    border: 1px solid ${colours.style.secondary};
    color: ${colours.style.secondary};
`

const getTechList = (techs = []) => {
    if (!techs.length) {
        return (
            <div />
        )
    }

    return techs.map(tech => (
        <TechElement key={tech.id}>
            {tech.name}
        </TechElement>
    ))
}

const WorksTechs = ({ techs }) => {
    const title = 'TECHNOLOGIES'
    const type = 'sectionTitle'
    const colour = 'secondary'
    const iconPath = '../assets/icons/tech_icon.png'
    const bgColour = 'primary'
    const techList = getTechList(techs)

    return (
        <SectionContainer
            title={title}
            type={type}
            colour={colour}
            iconPath={iconPath}
            bgColour={bgColour}
        >
            <TechContainer>
                {techList}
            </TechContainer>
      </SectionContainer>
    )
}

export default WorksTechs