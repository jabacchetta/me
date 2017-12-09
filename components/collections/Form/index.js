import React from 'react'
import Button from '../../elements/Button/index'

const Form = () => (
  <form action="https://formspree.io/jason@bacchetta.co" method="POST">
    <input type="text" placeholder="Name" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <input type="hidden" value="Message via bacchetta.co" name="_subject" />
    <textarea placeholder="Message" name="message" />
    <Button primary>
      Submit
    </Button>
    <style jsx>{`
      ::placeholder {
        color: var(--color-primary-light);
      }

      input {
        font-size: 1rem;
        height: 3rem;
        border-radius: 0.5rem;
        width: 100%;
        margin-bottom: 1.725rem;
        padding: 0 1.05rem;
        color: var(--color-primary);
        border: solid 1px var(--color-primary-light-more);
      }

      textarea {
        color: var(--color-primary);
        border: solid 1px var(--color-primary-light-more);
        border-radius: 0.5rem;
        width: 100%;
        margin-bottom: 1.725rem;
        font-size: 1rem;
        padding: 1.05rem;
        height: 6rem;
      }

      input:focus,
      textarea:focus {
        outline: none;
        border-color: var(--color-secondary);
        box-shadow: 0 0 0 1px var(--color-secondary);
      }
    `}</style>
  </form>
)

export default Form
