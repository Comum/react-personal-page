import React from 'react'
import PropTypes from 'prop-types'

import ColourContainer from '../../../components/ColourContainer/ColourContainer'
import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import SectionArea from '../../../components/SectionArea/SectionArea'
import ContentContainer from '../../../components/ContentContainer/ContentContainer'
import CompanyElement from '../../../components/CompanyElement/CompanyElement'

const getCompaniesList = (companies) => {
  if (!companies.length) {
    return (
      <div />
    )
  }

  return companies.map(company => (
    <CompanyElement key={company.id} company={company} />
  ))
}

const Experience = ({ companies }) => {
  const title = 'EXPERIENCE'
  const type = 'sectionTitle'
  const colour = 'secondary'
  const iconPath = 'assets/icons/exp_icon.png'
  const bgColour = 'primary'
  const companiesList = getCompaniesList(companies)

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}>
        {companiesList}
    </SectionContainer>
  )
}

Experience.propTypes = {
  companies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Experience
