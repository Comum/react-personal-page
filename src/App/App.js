import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './global-styles'
import HomeContainer from '../scenes/HomeContainer'
import EaterEgg from '../scenes/EasterEgg'
import WorksPage from '../scenes/WorksPage'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/works/:id" component={WorksPage} />
      <Route path="/easteregg" component={EaterEgg} />
      <Route path="/" exact component={HomeContainer} />
    </div>
  </BrowserRouter>
)

export default App
