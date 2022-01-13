import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import AppComponent from '../components/component'
import Footer from '../components/footer'

const About = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>About - EscapeHilonew</title>
          <meta property="og:title" content="About - EscapeHilonew" />
        </Head>
        <div className="section1">
          <Header rootClassName="rootClassName1"></Header>
          <div className="container1">
            <div className="container2">
              <h3 className="text healine">YOUR MISSION: Jungle Mystery</h3>
              <span className="text01 textXL">
                <span className="text02">
                  Your group has 1 hour to escape from Hawaiiâs jungle themed
                  Escape Room!
                </span>
              </span>
            </div>
            <div className="cards-container">
              <div className="card1">
                <div className="container3"></div>
                <h6 className="text03 textXL">FOLLOW THE CLUES</h6>
                <span className="text04">
                  There are clues hidden throughout the game room that help
                  guide your next decision
                </span>
              </div>
              <div className="card2">
                <div className="container4"></div>
                <h6 className="text05 textXL">FIND THE KEYS</h6>
                <span className="text06">
                  Keys are used to progress to the next puzzle, can you find
                  them all before time runs out?
                </span>
              </div>
              <div className="card3">
                <div className="container5"></div>
                <h6 className="text07 textXL">SOLVE THE MYSTERY</h6>
                <span className="text08">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </span>
              </div>
            </div>
            <div className="cards-container1">
              <div className="card21">
                <div className="container6"></div>
                <h6 className="text09 textXL">60 MINUTE TIME LIMIT</h6>
                <span className="text10">
                  Can you and your group solve all the puzzles before time runs
                  out?
                </span>
              </div>
            </div>
            <AppComponent></AppComponent>
            <div className="work-with-us"></div>
          </div>
          <Footer rootClassName="rootClassName"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .section1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/junglebg-1500w.jpg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .container1 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.69);
          }
          .container2 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .text {
            color: #ffffff;
            text-align: center;
          }
          .text01 {
            color: var(--dl-color-pimary-900);
            text-align: center;
            margin-bottom: 0.25rem;
          }
          .text02 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .cards-container {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .card1 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .container3 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/search-1500h.png');
          }
          .text03 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text04 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .card2 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .container4 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/key-1500h.png');
          }
          .text05 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text06 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .card3 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .container5 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/check-1500h.png');
          }
          .text07 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text08 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .cards-container1 {
            height: 323px;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .card21 {
            width: 420px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .container6 {
            flex: 0 0 auto;
            width: 86px;
            height: 87px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('https://play.teleporthq.io/static/svg/placeholders/no-image.svg');
          }
          .text09 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text10 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .work-with-us {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .cards-container {
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .card1 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .card2 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .card3 {
              width: 90%;
            }
            .cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .card21 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
          }
          @media (max-width: 767px) {
            .section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container2 {
              width: 100%;
            }
            .work-with-us {
              margin-top: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .card1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text04 {
              text-align: left;
            }
            .card2 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text06 {
              text-align: left;
            }
            .text08 {
              text-align: left;
            }
            .card21 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text10 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
