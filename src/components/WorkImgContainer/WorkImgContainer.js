import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImgContainer = styled.div`
  width: 100%;

  border-radius: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const ImgElement = styled.img`
  width: 100%;
  border-radius: 5px;
`

const WorkImgContainer = ({ imgPath, onClick }) => (
  <ImgContainer>
    <ImgElement
      src={imgPath}
      alt=""
      onClick={onClick}
    />
  </ImgContainer>
)

WorkImgContainer.propTypes = {
  imgPath: PropTypes.string.isRequired,
}

export default WorkImgContainer
