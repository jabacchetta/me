import React from 'react'

const Text = ({ Element = 'p', light = false, children }) => (
  <Element>
    <span>{children}</span>
    <style jsx>{`
      span {
      line-height: ${Element === 'h1' || Element === 'h2' ? '1.125' : '1.625'};
        font-weight: ${Element === 'h1' || Element === 'h2' ? '900' : '400'};
        color: #${light ? 'fff' : '515369'};
        font-size: ${Element === 'h1' ? '3.25' : Element === 'h2' ? '2.25' : '1'}rem;
        font-family: ${Element === 'h1' || Element === 'h2' ? 'Muli' : 'Open Sans'};
      }
    `}</style>
  </Element>
)

export default Text
