import React from 'react'
import Button from '../Button'
import Social from '../Social'
import Text from '../Text'

const About = ({ toggleView }) => ([
  <Text key="title" Element="h1">Jason Bacchetta</Text>,
  <Text key="text" light>
    Husband, father, theist, entrepreneur, software engineer, brand architect, technology hound,
    sports fan, coffee aficionado, cryptocurrency investor, Google fanboy, video game addict, Game
    of Thrones enthusiast, fantasy football champ, aspiring wordsmith, would-be philosopher.
  </Text>,
  <Button primary onClick={toggleView}>Contact</Button>,
  <Button>Download Resume</Button>,
  <Social />,
])

export default About
