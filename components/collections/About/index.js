import React from 'react'
import Button from '../../elements/Button/index'
import Social from '../Social/index'
import Text from '../../elements/Text/index'

const About = ({ toggleView }) => ([
  <Text key="title" title>Jason Bacchetta</Text>,
  <Text key="text" content>
    Husband, father, theist, entrepreneur, software engineer, brand architect, technology hound,
    sports fan, coffee aficionado, cryptocurrency investor, Google fanboy, video game addict, Game
    of Thrones enthusiast, fantasy football champ, aspiring wordsmith, would-be philosopher.
  </Text>,
  <Button key="btn1" primary onClick={toggleView}>Contact</Button>,
  <Button key="btn2" onClick={() => window.open(`/static/Resume.pdf`)}>
    Resume
  </Button>,
  <Social key="social" />,
])

export default About
