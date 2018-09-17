import React from 'react'
import styled from 'styled-components'

const photoOnFocusCb = (e, img) => {
  e.currentTarget.src = img
}

const photoOnBlurCb = (e, img) => { console.log(img);
  e.currentTarget.src = img
}

const ContactElement = ({ contact }) => {
  const ImageContainer = styled.img`
    max-width: 50px;
    max-height: 50px;

    margin-right: 20px;
  `

  return (
    <div key={contact.id}>
      <link rel="prefetch" href={contact.hoverImg} />
      <a href={contact.path} rel="noopener noreferrer" target="_blank">
        <ImageContainer
          src={contact.img}
          alt="Icon"
          onMouseOver={e => photoOnFocusCb(e, contact.hoverImg)}
          onFocus={e => photoOnFocusCb(e, contact.hoverImg)}
          onBlur={e => photoOnBlurCb(e, contact.img)}
          onMouseOut={e => photoOnBlurCb(e, contact.img)}
        />
      </a>
    </div>
  )
}

export default ContactElement
