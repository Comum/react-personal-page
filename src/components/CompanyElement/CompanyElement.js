import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from '../Link/Link'
import Body from '../typography/Body'
import Subtitle from '../typography/Subtitle'
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
    <Subtitle
      colour="secondary"
      fontSize="subtitle1"
    >
      {company.company}
      <Link path={company.companyPage} href={company.companyPage} />
    </Subtitle>
    <PeriodContainer>
      <Body
        colour="secondary"
        fontSize="body2"
      >
        {company.period}
      </Body>
    </PeriodContainer>
    <Body
      colour="secondary"
      fontSize="body1"
    >
      {company.title}
    </Body>
  </CompanyContainer>
)

CompanyElement.propTypes = {
  company: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default CompanyElement
