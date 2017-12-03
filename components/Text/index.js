import React from 'react'

const Text = ({ Element = 'p', white = false, light = false, button = false, children }) => (
  <Element>
    <span>{children}</span>
    <style jsx>{`
      span {
        display: inline-block;
        text-transform: ${button ? 'uppercase' : 'none'};
        letter-spacing: ${button ? 'var(--letter-spacing-lg)' : 'inherit'};
        margin-bottom: ${button ? '0' : Element === 'p' ? '2.5' : '1.75'}rem;
        line-height: ${Element === 'h1' || Element === 'h2' ? '1.125' : '1.625'};
        font-weight: ${Element === 'h1' || Element === 'h2' || button ? '900' : light ? '300' : '400'};
        color: #${white ? 'fff' : '515369'};
        font-size: ${Element === 'h1' ? '3.25' : Element === 'h2' ? '2.25' : button ? '0.75' : '1'}rem;
        font-family: ${Element === 'h1' || Element === 'h2' || button ? 'Muli' : 'Roboto'};
      }
    `}</style>
  </Element>
)

export default Text
