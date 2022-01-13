import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import AppComponent from '../components/component'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Escape Hilo</title>
          <meta property="og:title" content="Escape Hilo" />
        </Head>
        <div className="hero">
          <div className="bg"></div>
          <Header rootClassName="rootClassName3"></Header>
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
                  Recover a lost family heirloom before your time expires. You
                  have 60 minutes to solve your way out
                </span>
              </span>
            </div>
            <AppComponent></AppComponent>
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
                <div className="container05">
                  <svg viewBox="0 0 1024 1024" className="icon">
                    <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
                  </svg>
                </div>
                <h6 className="text08 textXL">FOLLOW THE CLUES</h6>
                <span className="text09">
                  There are clues hidden throughout the game room that help
                  guide your next decision
                </span>
              </div>
              <div className="card2">
                <div className="container06">
                  <svg viewBox="0 0 1024 1024" className="icon2">
                    <path d="M704 0c-176.73 0-320 143.268-320 320 0 20.026 1.858 39.616 5.376 58.624l-389.376 389.376v192c0 35.346 28.654 64 64 64h64v-64h128v-128h128v-128h128l83.042-83.042c34.010 12.316 70.696 19.042 108.958 19.042 176.73 0 320-143.268 320-320s-143.27-320-320-320zM799.874 320.126c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
                  </svg>
                </div>
                <h6 className="text10 textXL">FIND THE KEYS</h6>
                <span className="text11">
                  Keys are used to progress to the next puzzle, can you find
                  them all before time runs out?
                </span>
              </div>
              <div className="card3">
                <div className="container07">
                  <svg viewBox="0 0 1024 1024" className="icon4">
                    <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM810 128q36 0 61 25t25 61v596q0 36-25 61t-61 25h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                  </svg>
                </div>
                <h6 className="text12 textXL">SOLVE THE MYSTERY</h6>
                <span className="text13">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </span>
              </div>
            </div>
            <div className="cards-container1">
              <div className="card21">
                <div className="container08">
                  <svg viewBox="0 0 877.7142857142857 1024" className="icon6">
                    <path d="M804.571 73.143c0 211.429-101.143 364.571-213.143 438.857 112 74.286 213.143 227.429 213.143 438.857h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-841.143c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857c0-211.429 101.143-364.571 213.143-438.857-112-74.286-213.143-227.429-213.143-438.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h841.143c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857zM499.429 477.714c115.429-43.429 232-196 232-404.571h-585.143c0 208.571 116.571 361.143 232 404.571 14.286 5.143 24 18.857 24 34.286s-9.714 29.143-24 34.286c-49.143 18.286-98.857 57.143-139.429 112h400c-40.571-54.857-90.286-93.714-139.429-112-14.286-5.143-24-18.857-24-34.286s9.714-29.143 24-34.286z"></path>
                  </svg>
                </div>
                <h6 className="text14 textXL">60 MINUTE TIME LIMIT</h6>
                <span className="text15">
                  Can you and your group solve all the puzzles before time runs
                  out?
                </span>
              </div>
            </div>
            <AppComponent></AppComponent>
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
                <div className="container11">
                  <img
                    alt="image"
                    src="/playground_assets/2-1500h.jpg"
                    loading="lazy"
                    className="image02"
                  />
                </div>
                <img
                  alt="stars"
                  src="/playground_assets/5stars-200h.png"
                  loading="lazy"
                  className="image03"
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
            className="image04"
          />
        </div>
        <div className="section2">
          <div className="team">
            <div className="container12">
              <div className="container13">
                <img
                  alt="image"
                  src="/playground_assets/ryan_2-200h.png"
                  loading="lazy"
                  className="image05"
                />
                <span className="text30">Ramses G.</span>
                <img
                  alt="image"
                  src="/playground_assets/5stars-200h.png"
                  className="image06"
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
                  loading="lazy"
                  className="image07"
                />
                <span className="text34">Julie R.</span>
                <img
                  alt="image"
                  src="/playground_assets/5stars-200h.png"
                  className="image08"
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
              <div className="container15">
                <img
                  alt="image"
                  src="/playground_assets/ryan_4-200h.png"
                  loading="lazy"
                  className="image09"
                />
                <span className="text37">Brandon Hoffman</span>
                <img
                  alt="image"
                  src="/playground_assets/5stars-200h.png"
                  className="image10"
                />
                <span className="text38">
                  <span>
                    What a cool place. Every escape room has its own uniqueness.
                    This one did not disappoint. The game master is really cool
                    and exciting. The theme is great. Canât give away any
                    details or it will ruin the fun. Definitely recommend.
                  </span>
                </span>
              </div>
              <div className="container16">
                <img
                  alt="image"
                  src="/playground_assets/ryan_5-200h.png"
                  loading="lazy"
                  className="image11"
                />
                <span className="text40">Tiffany Plagenza</span>
                <img
                  alt="image"
                  src="/playground_assets/5stars-200h.png"
                  className="image12"
                />
                <span className="text41">
                  <span>
                    We escaped! This was the most fun we have had with a great
                    challenge. We came to Hilo, Hawaii just to visit this escape
                    room after attempting to escape the Samurai room 2 years
                    ago. 5 star experience.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="link button"
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
            position: inherit;
            flex-wrap: wrap;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
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
            background-image: url('/playground_assets/junglebg-1500h.jpg');
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
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container02 {
            display: flex;
            z-index: 100;
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
          .image {
            top: auto;
            left: auto;
            right: 0px;
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
            width: auto;
            height: 3rem;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .icon {
            width: 3rem;
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
            justify-content: center;
          }
          .icon2 {
            width: 3rem;
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
            width: auto;
            height: 3rem;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .icon4 {
            width: 3rem;
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
            justify-content: center;
          }
          .icon6 {
            width: 3rem;
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
            font-style: italic;
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
            height: 32rem;
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
            height: 243px;
            display: flex;
            align-items: center;
            border-radius: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .image02 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding-bottom: var(--dl-space-space-unit);
          }
          .image03 {
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
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .image04 {
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
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: flex-start;
            flex-direction: row;
          }
          .container13 {
            display: flex;
            align-items: center;
            border-color: #000000;
            border-style: inset;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .image05 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text30 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image06 {
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
            border-color: #000000;
            border-style: inset;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
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
          .container15 {
            display: flex;
            align-items: center;
            border-color: #000000;
            border-style: inset;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
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
          .container16 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: #000000;
            border-style: inset;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .image11 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .text40 {
            color: #000000;
            text-align: center;
            font-weight: 700;
          }
          .image12 {
            width: 100px;
            object-fit: cover;
          }
          .text41 {
            color: #000000;
            text-align: center;
          }
          .link {
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
          .link:hover {
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
              width: 100%;
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
            .container02 {
              z-index: 100;
            }
            .text {
              color: #ffffff;
            }
            .section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container03 {
              max-width: 100%;
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
            .container13 {
              width: 100%;
            }
            .container14 {
              width: 100%;
            }
            .container15 {
              width: 100%;
            }
            .container16 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
