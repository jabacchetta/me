// language=CSS
export default `
  html {
    box-sizing: border-box;
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    font-size: 1em;
    letter-spacing: var(--letter-spacing-sm);
    color: var(--color-primary);
    font-weight: 300;
  }
   
  body:before {
    height: var(--background-mobile-height);
    width: 100%;
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, rgba(132, 67, 138, 0.31) 21%, rgba(65, 129, 224, 0.188) 100%), url(/static/background.jpg) center / cover, var(--color-primary);
  }
  
  @media
  only screen and (min-width: 720px),
  only screen and (min-resolution: 1.2dppx) and (min-width: 360px),
  only screen and (min-resolution: 2.2dppx) and (min-width: 240px),
  only screen and (min-resolution: 3.2dppx) and (min-width: 180px) {
    body:before {
      background: linear-gradient(45deg, rgba(132, 67, 138, 0.31) 21%, rgba(65, 129, 224, 0.188) 100%), url(/static/background@2x.jpg) center / cover, var(--color-primary);
    }
  }
  
  @media
  only screen and (min-width: 1440px),
  only screen and (min-resolution: 1.2dppx) and (min-width: 720px),
  only screen and (min-resolution: 2.2dppx) and (min-width: 480px),
  only screen and (min-resolution: 3.2dppx) and (min-width: 360px) {
    body:before {
      background: linear-gradient(45deg, rgba(132, 67, 138, 0.31) 21%, rgba(65, 129, 224, 0.188) 100%), url(/static/background@3x.jpg) center / cover, var(--color-primary);
    }
  }
  
  @media
  only screen and (min-width: 2160px),
  only screen and (min-resolution: 1.2dppx) and (min-width: 1080px),
  only screen and (min-resolution: 2.2dppx) and (min-width: 720px),
  only screen and (min-resolution: 3.2dppx) and (min-width: 540px) {
    body:before {
      background: linear-gradient(45deg, rgba(132, 67, 138, 0.31) 21%, rgba(65, 129, 224, 0.188) 100%), url(/static/background@4x.jpg) center / cover, var(--color-primary);
    }
  }
  
  @media (min-width: 1280px) {
    body:before {
      height: 100vh;
      width: var(--background-desktop-width);
    }
  }
  
  main,
  input,
  textarea {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    background: none;
    outline: 0;
    border: 0;
    padding: 0;
  }

  h1,
  h2,
  p {
    font-size: inherit;
    margin: 0;
  }

  a,
  area,
  button,
  [role="button"],
  input:not([type=range]),
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
`