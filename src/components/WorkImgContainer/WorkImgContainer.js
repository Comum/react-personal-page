import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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

const WorkImgContainer = ({ id, imgPath }) => {
  const url = `/works/${id}`

  return (
    <ImgContainer>
      <Link to={url}>
        <ImgElement
          src={imgPath}
          alt=""
        />
      </Link>
    </ImgContainer>
  )
}

WorkImgContainer.propTypes = {
  id: PropTypes.number.isRequired,
  imgPath: PropTypes.string.isRequired,
}

export default WorkImgContainer
