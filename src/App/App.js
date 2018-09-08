import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import './global-styles'
import Header from '../scenes/components/Header/Header'
import About from '../scenes/components/About/About'

const App = props => (
  <Provider store={props.store}>
    <div>
      <Header />
      <About />
    </div>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
}

export default App
