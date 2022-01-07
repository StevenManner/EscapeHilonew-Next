import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>EscapeHilonew</title>
          <meta property="og:title" content="EscapeHilonew" />
        </Head>
        <div className="hero">
          <div className="bg"></div>
          <Header></Header>
          <div className="container01">
            <div className="container02">
              <h1 className="text">
                Jungle Mystery
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <span className="text01">
                <span>
                  Jungle Mystery! You&apos;re in a jungle decorated room. You
                  have 60 minutes to solve the puzzles and find the clues so you
                  can escape.
                </span>
              </span>
            </div>
            <button className="button">Click Here to Book Your Escape!</button>
            <img
              alt="image"
              src="/playground_assets/gray-vector.svg"
              className="image"
            />
            <img
              alt="image"
              src="/playground_assets/white-vector.svg"
              className="image01"
            />
          </div>
        </div>
        <div className="section1">
          <div className="container03">
            <div className="container04">
              <h6 className="text03">
                <span>Escape hilo presents...</span>
              </h6>
              <h3 className="text05 healine">YOUR MISSION: Jungle Mystery</h3>
              <span className="text06 textXL">
                <span className="text07">
                  Your group has 1 hour to escape from Hawaiiâs jungle themed
                  Escape Room!
                </span>
              </span>
            </div>
            <div className="cards-container">
              <div className="card1">
                <div className="container05"></div>
                <h6 className="text08 textXL">FOLLOW THE CLUES</h6>
                <span className="text09">
                  There are clues hidden throughout the game room that help
                  guide your next decision
                </span>
              </div>
              <div className="card2">
                <div className="container06"></div>
                <h6 className="text10 textXL">FIND THE KEYS</h6>
                <span className="text11">
                  Keys are used to progress to the next puzzle, can you find
                  them all before time runs out?
                </span>
              </div>
              <div className="card3">
                <div className="container07"></div>
                <h6 className="text12 textXL">SOLVE THE MYSTERY</h6>
                <span className="text13">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </span>
              </div>
            </div>
            <div className="cards-container1">
              <div className="card21">
                <div className="container08"></div>
                <h6 className="text14 textXL">FIND THE KEYS</h6>
                <span className="text15">
                  Keys are used to progress to the next puzzle, can you find
                  them all before time runs out?
                </span>
              </div>
            </div>
            <button className="button1 button">Book Your Escape Today!</button>
            <div className="work-with-us">
              <div className="container09">
                <h3 className="text16 healine">
                  Not convinced? Hear from our previous winners!
                </h3>
                <span className="text17">
                  <span className="text18">
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
                  <span className="text21">
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
              <div className="container10">
                <div className="container11"></div>
                <img
                  alt="image"
                  src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-1500h.png"
                  className="image02"
                />
                <h4 className="text27 healine">Five Star Reviews on Google!</h4>
                <span className="text28">
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
            className="image03"
          />
        </div>
        <div className="section2">
          <div className="team">
            <div className="container12">
              <div className="container13">
                <img
                  alt="image"
                  src="/playground_assets/ryan_2-200h.png"
                  className="image04"
                />
                <span className="text30">Ramses G.</span>
                <img
                  alt="image"
                  src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-1500h.png"
                  className="image05"
                />
                <span className="text31">
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
              <div className="container14">
                <img
                  alt="image"
                  src="/playground_assets/ryan_3-200h.png"
                  className="image06"
                />
                <span className="text34">Julie R.</span>
                <img
                  alt="image"
                  src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-1500h.png"
                  className="image07"
                />
                <span className="text35">
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
                  <div className="container15">
                    <img
                      alt="image"
                      src="/playground_assets/ryan_4-200h.png"
                      className="image08"
                    />
                    <span className="text37">Brandon Hoffman</span>
                    <img
                      alt="image"
                      src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-1500h.png"
                      className="image09"
                    />
                    <span className="text38">
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
                  <div className="container16">
                    <img
                      alt="image"
                      src="/playground_assets/ryan_5-200h.png"
                      className="image10"
                    />
                    <span className="text40">Tiffany Plagenza</span>
                    <img
                      alt="image"
                      src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-1500h.png"
                      className="image11"
                    />
                    <span className="text41">
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
        <button className="button2 button">
          Book Your Jungle Mystery Today!
        </button>
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
          .hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/isaac-quesada-6xxxvb72qb0-unsplash%5B1%5D-1500h.jpg');
          }
          .bg {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 0.7;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .container01 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container02 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .text {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .text01 {
            color: #ffffff;
            max-width: 600px;
            text-align: center;
          }
          .button {
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            border-width: 0px;
            background-color: #39b300;
          }
          .image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .image01 {
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            display: none;
            position: absolute;
            object-fit: cover;
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
          .container03 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: column;
          }
          .container04 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .text03 {
            color: #39b300;
            font-size: 0.875em;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .text05 {
            color: var(--dl-color-secondary-400);
            text-align: center;
          }
          .text06 {
            color: #000000;
            text-align: center;
            margin-bottom: 0.25rem;
          }
          .text07 {
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
          .container05 {
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
          .text08 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text09 {
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
          .container06 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/icons8-key-120-1500h.png');
          }
          .text10 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text11 {
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
          .container07 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/icons8-check-all-192-1500h.png');
          }
          .text12 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text13 {
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
          .container08 {
            flex: 0 0 auto;
            width: 86px;
            height: 87px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/hourglass%5B1%5D-200h.png');
          }
          .text14 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text15 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .button1 {
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            border-width: 0px;
            background-color: #39b300;
          }
          .work-with-us {
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .container09 {
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
          .text16 {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text17 {
            color: #000000;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text18 {
            font-weight: 300;
            white-space: normal;
            background-color: rgb(241, 245, 249);
          }
          .text21 {
            font-weight: 300;
            white-space: normal;
            background-color: rgb(241, 245, 249);
          }
          .container10 {
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
          .container11 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 243px;
            display: flex;
            align-items: stretch;
            border-radius: 0px;
            flex-direction: row;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/5-1500h.jpg');
            background-position: center;
          }
          .image02 {
            width: 200px;
            height: 50px;
            align-self: center;
            object-fit: cover;
          }
          .text27 {
            color: #ffffff;
            width: 372px;
            font-size: 1.25rem;
            text-align: center;
          }
          .text28 {
            color: #f2f5f9ff;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 400;
            line-height: 2;
            margin-bottom: var(--dl-space-space-unit);
          }
          .image03 {
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
          .container12 {
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .container13 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image04 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text30 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image05 {
            width: 100px;
            object-fit: cover;
          }
          .text31 {
            color: #000000;
            text-align: center;
          }
          .container14 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image06 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text34 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image07 {
            width: 100px;
            object-fit: cover;
          }
          .text35 {
            color: #000000;
            text-align: center;
          }
          .link {
            display: contents;
          }
          .container15 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .image08 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text37 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image09 {
            width: 100px;
            object-fit: cover;
          }
          .text38 {
            color: #000000;
            text-align: center;
          }
          .link1 {
            display: contents;
          }
          .container16 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .image10 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text40 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image11 {
            width: 100px;
            object-fit: cover;
          }
          .text41 {
            color: #000000;
            text-align: center;
          }
          .button2 {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-tripleunit);
            text-align: center;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #39b300;
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
            .container10 {
              width: 20rem;
              height: auto;
            }
            .text27 {
              width: 100%;
              height: 62px;
              text-align: center;
            }
            .text28 {
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
            .container12 {
              width: auto;
              max-width: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .container13 {
              width: auto;
            }
            .container14 {
              margin-right: var(--dl-space-space-unit);
            }
            .container15 {
              margin-right: var(--dl-space-space-unit);
            }
            .container16 {
              margin: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container04 {
              width: 100%;
            }
            .work-with-us {
              margin-top: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .container09 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container10 {
              width: 100%;
            }
            .container11 {
              height: 30rem;
            }
            .text28 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container12 {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .container13 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container14 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container15 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container16 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 479px) {
            .container02 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .card1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text09 {
              text-align: left;
            }
            .card2 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text11 {
              text-align: left;
            }
            .text13 {
              text-align: left;
            }
            .card21 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text15 {
              text-align: left;
            }
            .container12 {
              align-items: center;
              flex-direction: column;
            }
            .container15 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
