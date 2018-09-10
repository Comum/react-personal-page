import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import './global-styles'
import HomeContainer from '../scenes/HomeContainer'

const App = props => (
  <Provider store={props.store}>
    <HomeContainer />
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
}

export default App
