import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import ContactElement from '../../../components/ContactElement/ContactElement'
import colours from '../../../theme/colours'
import fonts from '../../../theme/fonts'

const EmailContainer = styled.div`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: ${colours.style.secondary}
    font-size: ${fonts.sizes.subtitle2}

    &:hover {
      text-decoration: underline;
    }
  }
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const getIconList = (contacts) => {
  if (!contacts.length) {
    return (
      <div />
    )
  }

  return contacts.map(contact => (
    <ContactElement key={contact.id} contact={contact} />
  ))
}

const Contact = ({ contacts }) => {
  const title = 'LET\'S TALK'
  const type = 'sectionTitle'
  const colour = 'secondary'
  const iconPath = 'assets/icons/letter_icon.png'
  const bgColour = 'primary'
  const email = 'miguel.rib.20@gmail.com'
  const emailPath = `mailto:${email}`
  const iconsList = getIconList(contacts)

  return (
    <SectionContainer
      title={title}
      type={type}
      colour={colour}
      iconPath={iconPath}
      bgColour={bgColour}
    >
      <EmailContainer>
        <a href={emailPath}>
          {email}
        </a>
      </EmailContainer>
      <IconsContainer>
        {iconsList}
      </IconsContainer>
    </SectionContainer>
  )
}

Contact.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Contact
