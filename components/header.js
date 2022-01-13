import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Header = (props) => {
  return (
    <>
      <header
        id="header"
        data-role="Header"
        className={`header ${props.rootClassName} `}
      >
        <header data-role="Header" className="header1">
          <div className="container">
            <Image
              alt="logo"
              src="/playground_assets/logo-200h.png"
              className="image"
              width={59}
              height={50}
            />
            <div className="nav">
              <NavigationLinks
                text3="About"
                text4="FAQ"
                rootClassName="rootClassName8"
              ></NavigationLinks>
            </div>
          </div>
          <div className="btn-group">
            <Link href="/book-a-room">
              <a className="link button">Book Now!</a>
            </Link>
          </div>
          <div data-type="BurgerMenu" className="burger-menu">
            <svg viewBox="0 0 1024 1024" className="icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="mobile-menu">
            <nav className="nav1">
              <div className="container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="image1"
                />
                <div data-type="CloseMobileMenu" className="close-mobile-menu">
                  <svg viewBox="0 0 1024 1024" className="icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName9"></NavigationLinks>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header {
            top: 0;
            flex: 0 0 auto;
            width: 100%;
            height: 75px;
            display: flex;
            z-index: 2;
            position: fixed;
            align-items: center;
            padding-top: var(--dl-space-space-unitandhalf);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: 0.75rem;
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unitandhalf);
            justify-content: center;
            background-color: #ffffff;
          }
          .header1 {
            left: 75px;
            width: 1072px;
            bottom: 0px;
            height: 75px;
            display: flex;
            position: absolute;
            max-width: 1400px;
            align-self: stretch;
            justify-content: space-between;
          }
          .container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .image {
            width: 59px;
            height: 50px;
          }
          .nav {
            display: flex;
            align-items: center;
            padding-left: 32px;
            flex-direction: row;
            justify-content: center;
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .link {
            color: #08cb00;
            text-align: center;
            font-weight: 700;
            padding-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .burger-menu {
            display: none;
          }
          .icon {
            width: 16px;
            height: 16px;
            display: none;
          }
          .mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .image1 {
            height: 2rem;
          }
          .close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon02 {
            width: 16px;
            height: 16px;
          }
          .icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon08 {
            width: 16px;
            height: 16px;
          }
          .rootClassName {
            margin-bottom: 0px;
          }
          .rootClassName1 {
            top: 0px;
            left: 0px;
            position: absolute;
            background-color: #ffffff;
          }
          .rootClassName2 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .rootClassName3 {
            align-self: flex-end;
          }

          @media (max-width: 991px) {
            .header {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-triplequarter);
            }
            .header1 {
              left: -6px;
              width: 100%;
              bottom: 0px;
              position: absolute;
            }
            .icon {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .header {
              background-color: var(--dl-color-gray-white);
            }
            .header1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .nav {
              display: none;
            }
            .btn-group {
              display: none;
            }
            .burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .rootClassName {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .header {
              justify-content: space-between;
            }
            .header1 {
              top: 0px;
              left: 0px;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .mobile-menu {
              padding: 16px;
            }
            .rootClassName3 {
              width: 100%;
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
  heading1: 'ESCAPE HILO',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
}

export default Header
