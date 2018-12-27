import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ColourContainer from '../../../components/ColourContainer/ColourContainer'
import NameTitle from '../../../components/NameTitle/NameTitle'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Body from '../../../components/typography/Body'
import fonts from '../../../theme/fonts'
import colours from '../../../theme/colours'
import breakpoints from '../../../theme/breakpoints'
import Snowflakes from '../../../components/Snowflakes/Snowflakes'
import { isItWinterTime } from '../../../AuxScripts/utils'

const TextContainer = styled.div`
  width: calc(100% - 200px);
  padding: 30px 100px;

  @media (max-width: ${breakpoints.small}) {
    padding: 30px 40px;
  }
`

const SectionTitleWrapper = styled.div`
  margin-top: 100px;
`

const TextWrapper = styled.div`
  color: ${colours.style.secondary};
  margin: 40px 0 100px;
`

const QuoteParagraph = styled.p`
  color: ${colours.style.tertiary}
  font-size: ${fonts.sizes.body1}
`

const QuoteContainer = styled.span`
  font-style: italic
`

const Header = ({ quote }) => {
  const title = 'FRONT-END DEVELOPER'
  const type = 'mainTitle'
  const colour = 'secondary'
  let quoteText = ''
  let author = ''

  if (quote.body) {
    // handle cors-proxy.htmldriven.com response
    const quoteObj = JSON.parse(quote.body)

    const { quote: quoteAux, author: authorAux } = quoteObj
    quoteText = `"${quoteAux}"`
    author = authorAux
  } else if (quote.quote) {
    // handle cors.io response
    const { quote: quoteAux, author: authorAux } = quote
    quoteText = `"${quoteAux}"`
    author = authorAux
  }

  return (
    <ColourContainer>
      {isItWinterTime() &&
        <Snowflakes />
      }
      <TextContainer>
        <NameTitle />
        <SectionTitleWrapper>
          <SectionTitle
            title={title}
            type={type}
            colour={colour}
          />
        </SectionTitleWrapper>
        <TextWrapper>
          <Body
            colour="tertiary"
            fontSize="body1"
          >
            Specializing in converting design to code
          </Body>
          {quoteText &&
            <QuoteParagraph>
              <QuoteContainer>{quoteText}</QuoteContainer>
              <span> by </span>
              <QuoteContainer>{author}</QuoteContainer>
            </QuoteParagraph>
          }
        </TextWrapper>
      </TextContainer>
    </ColourContainer>
  )
}

Header.propTypes = {
  quote: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Header
