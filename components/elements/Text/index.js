import React from 'react'

const getElement = ({ title, subtitle, content }) => {
  if (title) return 'h1';
  else if (subtitle) return 'h2';
  else if (content) return 'p';
  return 'span';
}

const getClassName = ({ title, subtitle, primaryButton, secondaryButton }) => {
  if (title) return 'title';
  else if (subtitle) return 'subtitle';
  else if (primaryButton) return 'primaryButton';
  else if (secondaryButton) return 'secondaryButton';
  return 'content';
}

const Text = (props) => {
  const Element = getElement(props);
  const className = getClassName(props);

  return (
    <Element>
      <span className={className}>{props.children}</span>
      <style jsx>{`
      span {
        display: inline-block;
      }

      .content {
        line-height: 1.625;
        margin-bottom: 2.5rem;
      }

      .title,
      .subtitle {
        margin-bottom: 1.75rem;
        font-family: Muli;
        line-height: 1.125;
        font-weight: 900;
      }

      .title {
        font-size: 3.25rem;
      }

      .subtitle {
        font-size: 2.25rem;
      }

      .primaryButton,
      .secondaryButton {
        font-size: 0.75rem;
        font-family: Muli;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing-lg);
      }

      .primaryButton {
        color: #fff;
      }
    `}</style>
    </Element>
  )
}

export default Text