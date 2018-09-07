import { injectGlobal } from 'styled-components'
import fonts from '../theme/fonts'

/* eslint-disable no-unused-expressions */
injectGlobal`
    html,
    body {
        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        font-family: ${fonts.mainFont}, ${fonts.fallbackFont};
    }
`
