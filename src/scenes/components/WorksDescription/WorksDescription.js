import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colours from '../../../theme/colours'
import fonts from '../../../theme/fonts'

const TextWrapper = styled.div`
    padding: 20px;
    color: ${colours.style.tertiary};
    font-size: ${fonts.sizes.body1};
    text-align: center;
`

const WorksDescription = ({ description }) => (
    <TextWrapper>
        {description}
    </TextWrapper>
)

export default WorksDescription
