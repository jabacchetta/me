import React from 'react'

const Text = ({ Element = 'p', light = false, children }) => (
  <Element>
    <span>{children}</span>
    <style jsx>{`
      span {
        color: #${light ? 'fff' : '515369'};
        display: block;
        font-size: ${Element === 'h1' ? '2.5' : Element === 'h2' ? '1.75' : '1'}rem;
      }
    `}</style>
  </Element>
)

export default Text
