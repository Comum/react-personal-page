import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UrlWapper from '../../../components/UrlWrapper/UrlWrapper'
import colours from '../../../theme/colours'
import fonts from '../../../theme/fonts'

const DescContainer = styled.div`
    padding: 40px;
    color: ${colours.style.tertiary};
    font-size: ${fonts.sizes.body1};
`

const ElementWrapper = styled.p`
    text-align: center;
`

const WorksDescription = ({ description, name, url }) => {
    const showLink =  url === 'unavailable' ? false : true

    return (
        <DescContainer>
            <ElementWrapper>
                {description}
            </ElementWrapper>
            {showLink &&
                <ElementWrapper>
                    <UrlWapper
                        url={url}
                        name={name}
                        preName="Link:"
                        textColor="tertiary"
                    />
                </ElementWrapper>
            }
        </DescContainer>
    )
}

export default WorksDescription
