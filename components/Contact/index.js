import React from 'react'
import Button from '../Button'
import Text from '../Text'

const Contact = ({ toggleView }) => ([
  <Button onClick={toggleView}>Go Back</Button>,
  <Text key="title" Element="h2">Contact</Text>,
  <Text key="text" light>
    Opportunities, partnerships, questions, or general inquiries? Get in touch!
  </Text>,
])

export default Contact
