import React from 'react'
import Button from '../../elements/Button/index'
import Form from '../Form/index'
import Text from '../../elements/Text/index'

const Contact = ({ toggleView }) => ([
  <Text key="title" subtitle>Contact</Text>,
  <Text key="text" content>
    Opportunities, partnerships, questions, or general inquiries? Get in touch!
  </Text>,
  <Form key="form" />,
  <Button key="btn" onClick={toggleView}>Cancel</Button>,
])

export default Contact
