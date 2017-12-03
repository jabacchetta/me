import React from 'react'
import Text from '../Text'

const Button = ({ primary, children, onClick }) => (
  <button onClick={onClick}>
    <Text white={primary} button>
      {children}
    </Text>
    <style jsx>{`
      button {
        margin-bottom: 1.25rem;
        cursor:pointer;
        background-color: ${primary ? '#46C7B0' : 'transparent'};
        border: ${primary ? 'none' : 'solid 1px #515369'};
        border-radius: 2rem;
        width: 13rem;
        height: 3.25rem;
        transition: 0.25s;
      }

      button:hover {
        background-color: ${primary ? '#58D6C0' : 'transparent'};
      }
    `}</style>
  </button>
)

export default Button
