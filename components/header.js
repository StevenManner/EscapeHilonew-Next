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
        <div data-type="MobileMenu" className="mobile-menu">
          <div className="top">
            <Link href="/f-a-q">
              <a className="link">
                <h1 className="heading textSM">{props.heading11}</h1>
              </a>
            </Link>
            <div data-type="CloseMobileMenu" className="close-menu">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="mid">
            <Link href="/profile">
              <a className="link1">
                <div className="container">
                  <svg viewBox="0 0 1024 1024" className="icon02">
                    <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                  </svg>
                  <span className="text textSM">PROFILE</span>
                </div>
              </a>
            </Link>
            <div className="container1">
              <svg viewBox="0 0 1024 1024" className="icon04">
                <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
                <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              </svg>
              <span className="text1 textSM">BLOG</span>
            </div>
          </div>
          <div className="bot">
            <svg viewBox="0 0 877.7142857142857 1024" className="icon09">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="icon11">
              <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="icon13">
              <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
            </svg>
          </div>
        </div>
        <header data-role="Header" className="header1">
          <div className="container2">
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
                rootClassName="rootClassName12"
              ></NavigationLinks>
            </div>
          </div>
          <div className="btn-group">
            <Link href="/book-a-room">
              <a className="link2 button">Book Now!</a>
            </Link>
          </div>
          <div data-type="BurgerMenu" className="burger-menu">
            <svg viewBox="0 0 1024 1024" className="icon15">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="mobile-menu1">
            <nav className="nav1">
              <div className="container3">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="image1"
                />
                <div data-type="CloseMobileMenu" className="close-mobile-menu">
                  <svg viewBox="0 0 1024 1024" className="icon17">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="icon19">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon21">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="icon23">
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
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-unitandhalf);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .link {
            display: contents;
          }
          .heading {
            color: var(--dl-color-secondary-400);
            font-weight: 700;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .close-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon {
            width: 24px;
            height: 24px;
          }
          .mid {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .link1 {
            display: contents;
          }
          .container {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            flex-direction: row;
            text-decoration: none;
          }
          .icon02 {
            fill: var(--dl-color-secondary-400);
            width: 13px;
          }
          .text {
            color: var(--dl-color-secondary-400);
            margin-left: var(--dl-space-space-halfunit);
          }
          .container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .icon04 {
            fill: var(--dl-color-secondary-400);
            width: 13px;
          }
          .text1 {
            color: var(--dl-color-secondary-400);
            margin-left: var(--dl-space-space-halfunit);
          }
          .bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: center;
            flex-direction: row;
          }
          .icon09 {
            fill: var(--dl-color-secondary-400);
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-halfunit);
            margin-right: 0.75rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .icon11 {
            fill: var(--dl-color-secondary-400);
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.75rem;
            margin-right: 0.75rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .icon13 {
            fill: var(--dl-color-secondary-400);
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.75rem;
            margin-right: 0.75rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .header1 {
            top: -20px;
            left: -2px;
            width: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            max-width: 1400px;
            align-self: stretch;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .container2 {
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
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .link2 {
            color: #08cb00;
            text-align: center;
            font-weight: 700;
            padding-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .burger-menu {
            display: none;
          }
          .icon15 {
            width: 16px;
            height: 16px;
            display: none;
          }
          .mobile-menu1 {
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
          .container3 {
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
          .icon17 {
            width: 16px;
            height: 16px;
          }
          .icon19 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon21 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon23 {
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

          @media (max-width: 991px) {
            .header {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-triplequarter);
            }
            .icon09 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .icon11 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .icon13 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .header1 {
              position: static;
            }
            .icon15 {
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
              padding: var(--dl-space-space-unit);
              position: static;
            }
            .mobile-menu1 {
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
  heading11: 'NOTUS PRO',
  heading1: 'ESCAPE HILO',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  heading11: PropTypes.string,
  heading1: PropTypes.string,
}

export default Header
