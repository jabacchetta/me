import React from 'react'
import Button from '../Button'
import Text from '../Text'

const About = ({ toggleView }) => ([
  <Text key="title" Element="h1">Jason Bacchetta</Text>,
  <Text key="text" light>
    Husband, father, theist, entrepreneur, software engineer, brand architect, Google
    fanboy, video game addict, technology hound, sports fan, coffee aficionado, Game of
    Thrones enthusiast, fantasy football champ, aspiring wordsmith, would-be
    philosopher.
  </Text>,
  <Button primary onClick={toggleView}>Contact</Button>,
  <Button>Download Resume</Button>,
])

export default About
