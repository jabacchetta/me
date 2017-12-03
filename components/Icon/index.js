import React from 'react'

const Icon = ({ icon }) => (
  <svg>
    <use xlinkHref={`${process.env.url}/static/map.svg#${icon.toLowerCase()}`} />
    <style jsx>{`
      svg {
        height: 24px;
        width: 24px;
        fill: #515369;
        border: 1px solid transparent;
        border-radius: 50%;
        padding: 8px;
        transition: 0.25s;
        margin: 0 8px 8px;
      }

      svg:hover {
        fill: #46C7B0;
        border: 1px solid #46C7B0;
      }
    `}</style>
  </svg>
)

export default Icon