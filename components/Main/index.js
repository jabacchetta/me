import React from 'react'
import About from '../About'
import Contact from '../Contact'

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
          :global(html) {
            box-sizing: border-box;
            font-size: 16px;
            font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
          }

          :global(body:before) {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 61.80339887vw;
            height: 100vh;
            width: 61.80339887vw;
            background: linear-gradient(45deg, rgba(132,67,138,0.31) 21%, rgba(65,129,224,0.188) 100%), url(/static/background.jpg) center / cover, #515369;
          }

          main {
            display: flex;
            flex-direction: column;
            top: 0;
            right: 0;
            padding: 4rem 4.25rem;
            position: fixed;
            height: 100vh;
            width: 38.19660113vw;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            text-align: center;
            background-color: #FFFFFF;
          }
    `}</style>
      </main>
    )
  }
}

export default Main
