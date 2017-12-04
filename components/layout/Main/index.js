import React from 'react'
import About from '../../collections/About/index'
import Contact from '../../collections/Contact/index'

class Main extends React.Component {
  state = { about: true }

  toggleView = () => this.setState({ about: !this.state.about })

  renderContent() {
    const { state, toggleView } = this;
    if (state.about) return <About toggleView={toggleView} />
    return <Contact toggleView={toggleView} />
  }

  render() {
    return (
      <main>
        {this.renderContent()}
        <style jsx>{`
          main {
            top: var(--background-mobile-height);
            width: 100%;
            right: 0;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 4rem 4.25rem;
            align-items: center;
            justify-content: center;
            text-align: center;
            background-color: #FFFFFF;
          }

          @media (min-width: 1280px) {
            main {
              top: 0;
              width: calc(100vw - var(--background-desktop-width));
            }
          }
    `}</style>
      </main>
    )
  }
}

export default Main
