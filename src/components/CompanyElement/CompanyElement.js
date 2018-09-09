import React from 'react'
import styled from 'styled-components'

import colours from '../../theme/colours'

const CompanyContainer = styled.section`
  width: 100%;

  margin-bottom: 16px;
  padding: 8px 16px;

  border: 1px solid ${colours.style.secondary};
  border-radius: 5px;

  &:hover {
    background-color: ${colours.style.secondaryFaded}
  }
`

const CompanyElement = ({ company }) => (
  <CompanyContainer>
      {company.company}
  </CompanyContainer>
)

export default CompanyElement
