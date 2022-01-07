import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className="container">
        <div className="container01">
          <div className="container02">
            <div className="container03">
              <span className="text">
                Find us on these platforms! Or click the telephone icon to call
                us. Click on the GPS icon for directions!
              </span>
              <div className="container04">
                <div className="container05">
                  <a
                    href="https://www.instagram.com/escapehilo/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                  >
                    <div className="container06">
                      <img
                        src="/playground_assets/instagram_icon.png-200h.webp"
                        className="image"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/EscapeHiloHawaii"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link1"
                  >
                    <div className="container07">
                      <svg viewBox="0 0 1024 1024" className="icon">
                        <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="tel:+18089699696" className="link2">
                    <div className="container08">
                      <img
                        alt={props.image_alt1}
                        src={props.image_src1}
                        className="image1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container09"></div>
        <div className="container10">
          <div className="container11">
            <span className="text01 textSM">
              <span className="text02">Hours of Operation</span>
              <br></br>
              <span>Mon â Closed</span>
              <span></span>
              <br></br>
              <span>Tues â 11:00AM â 5:00PM</span>
              <span></span>
              <br></br>
              <span>Wed â Thu 1:00 pm â 5:00 pm</span>
              <span></span>
              <br></br>
              <span>Fri â 1:00 pm â 7:00 pm</span>
              <span>&amp;#8203;</span>
              <span></span>
              <br></br>
              <span>Sat â Sun 10:30 pm â 7:00 pm</span>
              <span></span>
              <br></br>
              <span>email or call to request special booking times</span>
            </span>
          </div>
          <div className="container12">
            <div className="container13">
              <span className="text16 textXS">OTHER RESOURCES</span>
              <span className="text17 textSM">Terms &amp; Conditions</span>
              <span className="text18 textSM">Privacy Policy</span>
              <span className="text19 textSM">Contact Us</span>
            </div>
          </div>
        </div>
        <div className="container14">
          <div className="container15">
            <div className="container16"></div>
          </div>
        </div>
        <span className="text20 textSM">
          Copyright Â© 2022 Hilo Experience LLC dba Escape Hilo | Design by
          Manner Media LLC
        </span>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 450px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .text {
            color: #000000;
            font-weight: 700;
          }
          .container04 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container05 {
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .link {
            display: contents;
          }
          .container06 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .image {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .link1 {
            display: contents;
          }
          .container07 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .icon {
            fill: #4267B2;
            width: 25px;
            height: 25px;
          }
          .link2 {
            display: contents;
          }
          .container08 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .image1 {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .container09 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .container11 {
            flex: 0 0 auto;
            width: 33%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text01 {
            color: #000000;
            font-style: normal;
            text-align: left;
          }
          .text02 {
            font-style: normal;
            font-weight: 700;
          }
          .container12 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .text16 {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text17 {
            color: var(--dl-color-secondary-500);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text18 {
            color: var(--dl-color-secondary-500);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text19 {
            color: var(--dl-color-secondary-500);
          }
          .container14 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container15 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container16 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .text20 {
            color: #000000;
            align-self: center;
            padding-top: var(--dl-space-space-twoandhalf);
          }
          @media (max-width: 991px) {
            .container04 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container13 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .container {
              height: 475px;
            }
            .text {
              text-align: center;
            }
            .container04 {
              width: 597px;
            }
            .container10 {
              width: 100%;
            }
            .container11 {
              width: 33%;
            }
            .text01 {
              align-self: flex-start;
              margin-right: var(--dl-space-space-unit);
            }
            .container13 {
              width: 33%;
              align-items: center;
            }
          }
          @media (max-width: 479px) {
            .container {
              height: 100%;
            }
            .container03 {
              width: 100%;
            }
            .text {
              width: 100%;
              height: auto;
            }
            .container04 {
              width: auto;
            }
            .container10 {
              width: 100%;
            }
            .container11 {
              width: auto;
              height: auto;
            }
            .text01 {
              width: auto;
              text-align: center;
            }
            .text20 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text1: '308 Kamehameha Avenue, Suite 200',
  image_src1:
    '/playground_assets/98c828953930ca387b6c89c17c7df2c0-removebg-preview-200h.png',
  image_src2: 'd1a66251-1259-4713-8dca-e6d13de2b7ce',
  text21: 'Hours of Operation',
  image_alt2: 'image',
  image_alt1: 'image',
}

Footer.propTypes = {
  text1: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  text21: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Footer
