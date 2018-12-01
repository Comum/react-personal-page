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

const dataList = [
  {
    path: './assets/data/companies.json',
    section: 'companies',
  },
  {
    path: './assets/data/skillset.json',
    section: 'skillset',
  },
  {
    path: './assets/data/education.json',
    section: 'education',
  },
  {
    path: './assets/data/contacts.json',
    section: 'contacts',
  },
  {
    path: 'https://cors.io/?http://thoughtsoncoding.com/api/1.0/random.json',
    section: 'quote',
  },
  {
    path: './assets/data/works.json',
    section: 'works',
  },
]

class HomeContainer extends React.Component {
  state = {
    isLoading: false,
    companies: {},
    skillset: {},
    education: {},
    contacts: {},
    quote: {},
    works: {},
  }

  componentDidMount() {
    dataList.forEach(entry => {
      this.loadJsonData(entry.path, entry.section)
    })
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
        <Works works={this.state.works} />
        <Contact contacts={this.state.contacts} />
        <Copyright />
      </div>
    )
  }
}

export default HomeContainer
