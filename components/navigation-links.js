import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <span className="text">{props.text}</span>
        <span className="text1">{props.text1}</span>
        <span className="text2">{props.text2}</span>
        <span className="text3">{props.text3}</span>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .text {
            color: #000000;
          }
          .text1 {
            color: #000000;
            margin-left: 32px;
          }
          .text2 {
            color: #000000;
            margin-left: 32px;
          }
          .text3 {
            color: #000000;
            margin-left: 32px;
          }

          .rootClassName12 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text: 'HOME',
  text3: '',
  text1: 'ABOUT',
  rootClassName: '',
  text2: 'FAQ',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
