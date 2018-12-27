import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImgContainer = styled.div`
    width: 100%;

    padding: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgElement = styled.img`
    max-width: calc(100% - 60px);
    border-radius: 5px;
`

const WorksImgContainer = ({ imgPath }) => (
    <ImgContainer>
        <ImgElement
            src={imgPath}
            alt=""
        />
    </ImgContainer>
)

WorksImgContainer.propTypes = {
    imgPath: PropTypes.string,
}

export default WorksImgContainer