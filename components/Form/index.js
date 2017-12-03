import React from 'react'
import Button from '../Button'

const Form = () => (
  <form>
    <input type="name" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Message" />
    <Button primary>
      Submit
    </Button>
    <style jsx>{`
      input {
        font-size: 1rem;
        height: 3rem;
        border-radius: 0.5rem;
        width: 100%;
        margin-bottom: 1.725rem;
        padding: 0 1.05rem;
        color: #515369;
        border: solid 1px rgba(81,83,105,0.239);
      }

      textarea {
        color: #515369;
        border: solid 1px rgba(81,83,105,0.239);
        border-radius: 0.5rem;
        width: 100%;
        margin-bottom: 1.725rem;
        font-size: 1rem;
        padding: 1.05rem;
        height: 9rem;
      }

      input:focus,
      textarea:focus {
        outline: none;
        border-color: #46C7B0;
        box-shadow: 0 0 0 1px #46C7B0;
      }
    `}</style>
  </form>
)

export default Form
