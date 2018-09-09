import React from 'react'
import axios from 'axios'

import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'

class HomeContainer extends React.Component {
  state = {
    isLoading: false,
    companies: {},
  }

  componentDidMount() {
    this.onLoadCompanies()
  }

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled')
  }

  onLoadCompanies = async () => {
    try {
      this.setState({ isLoading: true })
      const response = await axios.get('./assets/data/companies.json', {
        cancelToken: this.signal.token,
      })

      this.setState({ companies: response.data, isLoading: true })
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Error: ', err.message)
      } else {
        this.setState({ isLoading: false })
      }
    }
  }

  signal = axios.CancelToken.source()

  render() {
    console.log('my state', this.state)
    return (
      <div>
        <Header />
        <About />
        <Experience />
      </div>
    )
  }
}

export default HomeContainer
