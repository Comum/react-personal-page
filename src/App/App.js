import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'

import './global-styles'
import HomeContainer from '../scenes/HomeContainer'
import EaterEgg from '../scenes/EasterEgg'
import Works from '../scenes/Works'

const App = props => (
  <Provider store={props.store}>
    <BrowserRouter>
      <div>
        <Route path="/works/:id" component={Works} />
        <Route path="/easteregg" component={EaterEgg} />
        <Route path="/" exact component={HomeContainer} />
      </div>
    </BrowserRouter>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
}

export default App
