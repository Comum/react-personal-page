import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import './global-styles'
import Header from '../scenes/components/Header/Header'

const App = props => (
  <Provider store={props.store}>
    <Header />
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
}

export default App
