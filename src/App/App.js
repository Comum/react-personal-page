import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import './global-styles'
import HomeContainer from '../scenes/HomeContainer'
import EaterEgg from '../scenes/EasterEgg'
import WorksPage from '../scenes/WorksPage'

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
`

const App = () => (
  <AppContainer>
    <BrowserRouter>
      <div>
        <Route path="/works/:id" component={WorksPage} />
        <Route path="/easteregg" component={EaterEgg} />
        <Route path="/" exact component={HomeContainer} />
      </div>
    </BrowserRouter>
  </AppContainer>
)

export default App
