import React from 'react'
import About from '../About'
import Contact from '../Contact'

class Main extends React.Component {
  state = { about: false }

  render() {
    return <main>{this.state.about ? <About /> : <Contact />}</main>
  }
}

export default Main
