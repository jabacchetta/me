import React from 'react'

const Text = ({ Element = 'p', white = false, light = false, button = false, children }) => (
  <Element>
    <span>{children}</span>
    <style jsx>{`
      span {
        text-transform: ${button ? 'uppercase' : 'none'};
        letter-spacing: ${button ? '0.2' : '0'}em;
        margin-bottom: ${Element === 'h1' || Element === 'h2' ? '1.125' : '1.75'}rem;
        line-height: ${Element === 'h1' || Element === 'h2' ? '1.125' : '1.625'};
        font-weight: ${Element === 'h1' || Element === 'h2' ? '900' : light ? '300' : '400'};
        color: #${white ? 'fff' : '515369'};
        font-size: ${Element === 'h1' ? '3.25' : Element === 'h2' ? '2.25' : button ? '0.75' : '1'}rem;
        font-family: ${Element === 'h1' || Element === 'h2' ? 'Muli' : 'Open Sans'};
      }
    `}</style>
  </Element>
)

export default Text
