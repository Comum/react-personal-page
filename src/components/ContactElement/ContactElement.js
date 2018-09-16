import React from 'react'
import styled from 'styled-components'


// GITHUB ISSUE FOR IMGS, MAYBES NEED TO BE IMPORTED https://github.com/facebook/create-react-app/issues/3238
const ContactElement = ({ contact }) => {
  const ImageContainer = styled.div`
    background-image: url(${contact.img});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    &:hover {
      background-image: url(${contact.hoverImg});
    }
  `

  return (
    <div>
      <link rel="prefetch" href={contact.hoverImg} />
      <a href={contact.path} rel="noopener noreferrer" target="_blank">
        <ImageContainer />
      </a>
    </div>
  )
}

export default ContactElement
