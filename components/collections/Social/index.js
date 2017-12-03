import React from 'react'
import Icon from '../../elements/Icon/index'

const Social = () => (
  <ul>
    <li>
      <a href="https://www.linkedin.com/in/jabacchetta/" rel="noopener noreferrer" target="_blank">
        <Icon icon="linkedin" />
      </a>
    </li>
    <li>
      <a href="https://github.com/jabacchetta" rel="noopener noreferrer" target="_blank">
        <Icon icon="github" />
      </a>
    </li>
    <li>
      <a href="https://stackoverflow.com/users/4500152/jabacchetta" rel="noopener noreferrer" target="_blank">
        <Icon icon="stackoverflow" />
      </a>
    </li>
    <style jsx>{`
      ul {
        padding: 0;
        list-style: none;
        display: flex;
      }
    `}</style>
  </ul>
)

export default Social
