import React from 'react'

import styles from './styles'

const App = ({ children }) => (
  <div>
    {children}
    <style jsx global>{styles}</style>
  </div>
)

export default App
