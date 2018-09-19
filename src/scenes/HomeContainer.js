import React from 'react'
import axios from 'axios'

import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skillset from './components/Skillset/Skillset'
import Education from './components/Education/Education'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Copyright from './components/Copyright/Copyright'

class HomeContainer extends React.Component {
  state = {
    isLoading: false,
    companies: {},
    skillset: {},
    education: {},
    contacts: {},
    quote: {},
  }

  componentDidMount() {
    this.onLoadCompanies()
    this.onLoadSkillset()
    this.onLoadEducation()
    this.onLoadContacts()
    this.onLoadQuote()
  }

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled')
  }

  onLoadCompanies = () => {
    this.loadJsonData('./assets/data/companies.json', 'companies')
  }

  onLoadSkillset = () => {
    this.loadJsonData('./assets/data/skillset.json', 'skillset')
  }

  onLoadEducation = () => {
    this.loadJsonData('./assets/data/education.json', 'education')
  }

  onLoadContacts = () => {
    this.loadJsonData('./assets/data/contacts.json', 'contacts')
  }

  onLoadQuote = () => {
    this.loadJsonData('https://cors-proxy.htmldriven.com/?url=http://thoughtsoncoding.com/api/1.0/random.json', 'quote')
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

  render() {
    return (
      <div>
        <Header quote={this.state.quote} />
        <About />
        <Experience companies={this.state.companies} />
        <Skillset skillset={this.state.skillset} />
        <Education education={this.state.education} />
        <Works />
        <Contact contacts={this.state.contacts} />
        <Copyright />
      </div>
    )
  }
}

export default HomeContainer
