import React from 'react'
import Button from '../Button'
import Form from '../Form'
import Text from '../Text'

const Contact = ({ toggleView }) => ([
  <Text key="title" subtitle>Contact</Text>,
  <Text key="text" content>
    Opportunities, partnerships, questions, or general inquiries? Get in touch!
  </Text>,
  <Form key="form" />,
  <Button key="btn" onClick={toggleView}>Cancel</Button>,
])

export default Contact
