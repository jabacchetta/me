import React from 'react'
import Text from '../Text'

const Button = ({ primary, children, onClick }) => (
  <button onClick={onClick}>
    <Text {...{ primaryButton: primary, secondaryButton: !primary }} button>
      {children}
    </Text>
    <style jsx>{`
      button {
        margin-bottom: 1.25rem;
        background-color: ${primary ? 'var(--color-secondary)' : 'transparent'};
        border: ${primary ? 'none' : 'solid 1px var(--color-primary)'};
        border-radius: 2rem;
        width: 15rem;
        height: 3.25rem;
        transition: var(--hover-duration-fast);
      }

      button:hover {
        background-color: ${primary ? 'var(--color-secondary-light-less)' : 'transparent'};
      }
    `}</style>
  </button>
)

export default Button
