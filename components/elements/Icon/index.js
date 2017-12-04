import React from 'react'

const Icon = ({ icon }) => (
  <svg>
    <use xlinkHref={`/static/map.svg#${icon.toLowerCase()}`} />
    <style jsx>{`
      svg {
        height: 24px;
        width: 24px;
        fill: var(--color-primary);
        border: 1px solid transparent;
        border-radius: 50%;
        padding: 8px;
        transition: var(--hover-duration-fast);
      }

      svg:hover {
        fill: var(--color-secondary);
        border: 1px solid var(--color-secondary);
      }
    `}</style>
  </svg>
)

export default Icon