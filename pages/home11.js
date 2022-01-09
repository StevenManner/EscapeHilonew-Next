import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import AppComponent from '../components/component'
import Footer from '../components/footer'

const Home11 = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Home11 - EscapeHilonew</title>
          <meta property="og:title" content="Home11 - EscapeHilonew" />
        </Head>
        <div className="section1">
          <Header rootClassName="rootClassName4"></Header>
          <div className="container01">
            <div className="container02">
              <h6 className="text">
                <span>Escape hilo presents...</span>
              </h6>
              <h3 className="text02 healine">YOUR MISSION: Jungle Mystery</h3>
              <span className="text03 textXL">
                <span className="text04">
                  Your group has 1 hour to escape from Hawaiiâs jungle themed
                  Escape Room!
                </span>
              </span>
            </div>
            <div className="cards-container">
              <div className="card1">
                <div className="container03"></div>
                <h6 className="text05 textXL">FOLLOW THE CLUES</h6>
                <span className="text06">
                  There are clues hidden throughout the game room that help
                  guide your next decision
                </span>
              </div>
              <div className="card2">
                <div className="container04"></div>
                <h6 className="text07 textXL">FIND THE KEYS</h6>
                <span className="text08">
                  Keys are used to progress to the next puzzle, can you find
                  them all before time runs out?
                </span>
              </div>
              <div className="card3">
                <div className="container05"></div>
                <h6 className="text09 textXL">SOLVE THE MYSTERY</h6>
                <span className="text10">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </span>
              </div>
            </div>
            <div className="cards-container1">
              <div className="card21">
                <div className="container06"></div>
                <h6 className="text11 textXL">60 MINUTE TIME LIMIT</h6>
                <span className="text12">
                  Can you and your group solve all the puzzles before time runs
                  out?
                </span>
              </div>
            </div>
            <AppComponent></AppComponent>
            <div className="work-with-us">
              <div className="container07">
                <h3 className="text13 healine">
                  Not convinced? Hear from our previous winners!
                </h3>
                <span className="text14">
                  <span className="text15">
                    Awesome game, awesome time. This was my first time playing
                    and what I had envisioned it to be; it was exactly that. It
                    was exciting, challenging, and completely well thought out.
                    - Holly
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="text18">
                    The experience was amazing. Unlike anything else in Hilo.
                    Definitely would recommend to any locals or anyone visiting
                    the island. - Elias
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    We have done a couple of escape rooms before and this one
                    was really ingenious, and c
                  </span>
                  <span>
                    hallenging enough to be fun but not too hard. A great way to
                    spend an hour in Hilo! - Jim
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="container08">
                <div className="container09">
                  <img
                    alt="image"
                    src="/playground_assets/5-1500h.jpg"
                    className="image"
                  />
                </div>
                <img
                  alt="image"
                  src="b8324887-abfb-4c68-bfd1-9009725db866"
                  className="image01"
                />
                <h4 className="text24 healine">Five Star Reviews on Google!</h4>
                <span className="text25">
                  <span>
                    With over 100 reviews on Google Maps, Escape Hilo continues
                    to craft a unique novelty experience for everyone
                  </span>
                </span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="image02"
          />
        </div>
        <div className="section2">
          <div className="team">
            <div className="container10">
              <div className="container11">
                <img
                  alt="image"
                  src="5a04a87c-e59a-451a-934b-a941f924cbf9"
                  className="image03"
                />
                <span className="text27">Ramses G.</span>
                <img
                  alt="image"
                  src="b8324887-abfb-4c68-bfd1-9009725db866"
                  className="image04"
                />
                <span className="text28">
                  <span>
                    Escape Hilo provided my sister and I a great experience! Did
                    we escape? No. However, we both had a blast running around,
                    solving clues, and jump scared by the animatronics. Our host
                    Ryan is fantastic at his job too. His exuberant attitude
                    made our visit worthwhile portraying what excellent local
                    hospitality is. His personality is a vibe. We both highly
                    recommend that anyone who is either tourist or local to come
                    escape.
                  </span>
                  <br></br>
                  <span>Good luck!</span>
                </span>
              </div>
              <div className="container12">
                <img
                  alt="image"
                  src="c390f1a3-fef3-4665-81d7-4f204a18ffc5"
                  className="image05"
                />
                <span className="text31">Julie R.</span>
                <img
                  alt="image"
                  src="b8324887-abfb-4c68-bfd1-9009725db866"
                  className="image06"
                />
                <span className="text32">
                  <span>
                    {' '}
                    Our family had an absolute blast!! The escape room was super
                    well done, a perfect mix of challenges &amp; fun. The owner
                    Ryan has to be one of the nicest people on the planet,
                    making our experience even more fun :) I would definitely
                    recommend!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <Link href="/profile">
                <a className="link">
                  <div className="container13">
                    <img
                      alt="image"
                      src="/playground_assets/ryan_4-200h.png"
                      className="image07"
                    />
                    <span className="text34">Brandon Hoffman</span>
                    <img
                      alt="image"
                      src="b8324887-abfb-4c68-bfd1-9009725db866"
                      className="image08"
                    />
                    <span className="text35">
                      <span>
                        What a cool place. Every escape room has its own
                        uniqueness. This one did not disappoint. The game master
                        is really cool and exciting. The theme is great. Canât
                        give away any details or it will ruin the fun.
                        Definitely recommend.
                      </span>
                    </span>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a className="link1">
                  <div className="container14">
                    <img
                      alt="image"
                      src="/playground_assets/ryan_5-200h.png"
                      className="image09"
                    />
                    <span className="text37">Tiffany Plagenza</span>
                    <img
                      alt="image"
                      src="b8324887-abfb-4c68-bfd1-9009725db866"
                      className="image10"
                    />
                    <span className="text38">
                      <span>
                        We escaped! This was the most fun we have had with a
                        great challenge. We came to Hilo, Hawaii just to visit
                        this escape room after attempting to escape the Samurai
                        room 2 years ago. 5 star experience â­ï¸
                      </span>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="link2 button"
        >
          Book Your Jungle Mystery Today!
        </a>
        <Footer></Footer>
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
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-pimary-900);
          }
          .container01 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container02 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .text {
            color: #39b300;
            font-size: 0.875em;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .text02 {
            color: var(--dl-color-secondary-400);
            text-align: center;
          }
          .text03 {
            color: #000000;
            text-align: center;
            margin-bottom: 0.25rem;
          }
          .text04 {
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(241, 245, 249);
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
          .container03 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: 839c7850-1803-4d11-aafa-0851d1569039;
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
          .container04 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: 9e88a36a-886d-4cf9-af7a-1e47e43f0e26;
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
          .container05 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: 4365cd10-0ace-4a5f-aa30-5d5fa232edf8;
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
          .container06 {
            flex: 0 0 auto;
            width: 86px;
            height: 87px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/hourglass-200h.png');
          }
          .text11 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text12 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .work-with-us {
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .container07 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .text13 {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text14 {
            color: #000000;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text15 {
            font-weight: 300;
            white-space: normal;
            background-color: rgb(241, 245, 249);
          }
          .text18 {
            font-weight: 300;
            white-space: normal;
            background-color: rgb(241, 245, 249);
          }
          .container08 {
            flex: 0 0 auto;
            width: 33%;
            height: 100%;
            display: flex;
            position: relative;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: #09A6E9;
          }
          .container09 {
            width: 100%;
            height: 243px;
            display: flex;
            align-items: center;
            border-radius: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-triplequarter);
          }
          .image01 {
            width: 200px;
            height: 50px;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
          }
          .text24 {
            color: #ffffff;
            width: 372px;
            font-size: 1.25rem;
            text-align: center;
          }
          .text25 {
            color: #f2f5f9ff;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 400;
            line-height: 2;
            margin-left: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .image02 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .section2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .container10 {
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .container11 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image03 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text27 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image04 {
            width: 100px;
            object-fit: cover;
          }
          .text28 {
            color: #000000;
            text-align: center;
          }
          .container12 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image05 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text31 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image06 {
            width: 100px;
            object-fit: cover;
          }
          .text32 {
            color: #000000;
            text-align: center;
          }
          .link {
            display: contents;
          }
          .container13 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .image07 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text34 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image08 {
            width: 100px;
            object-fit: cover;
          }
          .text35 {
            color: #000000;
            text-align: center;
          }
          .link1 {
            display: contents;
          }
          .container14 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .image09 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text37 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image10 {
            width: 100px;
            object-fit: cover;
          }
          .text38 {
            color: #000000;
            text-align: center;
          }
          .link2 {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-tripleunit);
            text-align: center;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #39b300;
          }
          .link2:hover {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
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
            .container08 {
              width: 20rem;
              height: auto;
            }
            .text24 {
              width: 100%;
              height: 62px;
              text-align: center;
            }
            .text25 {
              width: auto;
              align-self: center;
              text-align: center;
            }
            .section2 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .team {
              position: relative;
            }
            .container10 {
              width: auto;
              max-width: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .container11 {
              width: auto;
            }
            .container12 {
              margin-right: var(--dl-space-space-unit);
            }
            .container13 {
              margin-right: var(--dl-space-space-unit);
            }
            .container14 {
              margin: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container02 {
              width: 100%;
            }
            .work-with-us {
              margin-top: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .container07 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container08 {
              width: 100%;
            }
            .container09 {
              height: 30rem;
            }
            .text25 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container10 {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .container11 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container12 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container13 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container14 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 479px) {
            .card1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text06 {
              text-align: left;
            }
            .card2 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text08 {
              text-align: left;
            }
            .text10 {
              text-align: left;
            }
            .card21 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text12 {
              text-align: left;
            }
            .container10 {
              align-items: center;
              flex-direction: column;
            }
            .container13 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home11
