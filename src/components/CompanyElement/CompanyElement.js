import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from '../Link/Link'
import Body1 from '../typography/Body1'
import Body2 from '../typography/Body2'
import Subtitle1 from '../typography/Subtitle1'
import colours from '../../theme/colours'

const CompanyContainer = styled.section`
  width: calc(100% - 40px);

  margin-bottom: 16px;
  padding: 20px;

  border: 1px solid ${colours.style.secondary};
  border-radius: 5px;

  &:hover {
    background-color: ${colours.style.primaryFaded}
  }
`

const PeriodContainer = styled.div`
  margin-bottom: 16px;
`

const CompanyElement = ({ company }) => (
  <CompanyContainer>
    <Subtitle1 colour="secondary">
      {company.company}
      <Link path={company.companyPage} href={company.companyPage} />
    </Subtitle1>
    <PeriodContainer>
      <Body2 colour="secondary">{company.period}</Body2>
    </PeriodContainer>
    <Body1 colour="secondary">{company.title}</Body1>
  </CompanyContainer>
)

CompanyElement.propTypes = {
  company: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default CompanyElement
