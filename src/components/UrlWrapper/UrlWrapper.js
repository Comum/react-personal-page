import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colours from '../../theme/colours'

const UrlWrapper = ({
        url,
        name,
        preName,
        textColor
    }) => {
    const UrlWapper = styled.a`
        text-decoration: none;
        color: ${colours.style[textColor]};

        &:hover {
            text-decoration: underline;
        }
    `

    return (
        <UrlWapper
            href={url}
            target="_blank"
        >
            {preName} <i>{name}</i>
        </UrlWapper>
    )
}

UrlWrapper.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    preName: PropTypes.string,
    textColor: PropTypes.string,
}

export default UrlWrapper
