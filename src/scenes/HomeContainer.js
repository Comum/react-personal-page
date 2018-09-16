import React from 'react'
import axios from 'axios'

import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skillset from './components/Skillset/Skillset'
import Education from './components/Education/Education'

class HomeContainer extends React.Component {
  state = {
    isLoading: false,
    companies: {},
    skillset: {},
  }

  componentDidMount() {
    this.onLoadCompanies()
    this.onLoadSkillset()
  }

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled')
  }

  onLoadCompanies = async () => {
    this.loadJsonData('./assets/data/companies.json', 'companies')
  }

  onLoadSkillset = async () => {
    this.loadJsonData('./assets/data/skillset.json', 'skillset')
  }

  loadJsonData = async (path, key) => {
    try {
      this.setState({ isLoading: true })
      const response = await axios.get(path, {
        cancelToken: this.signal.token,
      })
      this.setState({ [key]: response.data, isLoading: true })
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Error: ', err.message)
      } else {
        this.setState({ isLoading: false })
      }
    }
  }

  signal = axios.CancelToken.source()
  skillSignal = axios.CancelToken.source()

  render() {
    return (
      <div>
        <Header />
        <About />
        <Experience companies={this.state.companies} />
        <Skillset skillset={this.state.skillset} />
        <Education />
      </div>
    )
  }
}

export default HomeContainer
