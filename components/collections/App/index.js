import React from 'react'

import styles from './styles/index'

const App = ({ children }) => (
  <div>
    {children}
    <style jsx global>{styles}</style>
  </div>
)

export default App
