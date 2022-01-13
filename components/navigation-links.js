import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="link">{props.text}</a>
        </Link>
        <Link href="/profile">
          <a className="link1">{props.text1}</a>
        </Link>
        <span className="text">{props.text2}</span>
        <span className="text1"></span>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .link {
            color: #000000;
            font-weight: 700;
            text-decoration: none;
          }
          .link1 {
            color: #000000;
            font-weight: 700;
            margin-left: 32px;
            text-decoration: none;
          }
          .text {
            color: #000000;
            font-weight: 700;
            margin-left: 32px;
          }
          .text1 {
            color: #000000;
            margin-left: 32px;
          }

          .rootClassName8 {
            margin-right: var(--dl-space-space-doubleunit);
          }

          .rootClassName12 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text1 {
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
  text1: 'ABOUT',
  text2: 'FAQ',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
