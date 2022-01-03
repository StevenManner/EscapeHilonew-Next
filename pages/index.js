import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import MemberDetails from '../components/member-details'
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
              className="image1"
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
            <div className="container09"></div>
            <div className="work-with-us">
              <div className="container10">
                <h3 className="text16 healine">
                  A few words from our past winners
                </h3>
                <span className="text17">
                  <span className="text18">
                    Don&apos;t let your users guess by attaching tooltips and
                    popoves to any element. Just make sure you enable them first
                    via JavaScript.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="text21">
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you&apos;re good to go. Just make sure you enable them first
                    via JavaScript.
                  </span>
                  <br></br>
                </span>
                <span className="text22">Check Notus PRO React!</span>
              </div>
              <div className="container11">
                <div className="container12">
                  <img
                    alt="image"
                    src="/playground_assets/blue_wave.svg"
                    className="image2"
                  />
                </div>
                <h4 className="text23 healine">Five Star Reviews on Google!</h4>
                <span className="text24">
                  <span>
                    With over 97 reviews on Google Maps, Escape Hilo continues
                    to craft a unique novelty experience for everyone
                  </span>
                </span>
                <div className="container13"></div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="image3"
          />
        </div>
        <div className="section2">
          <div className="team">
            <div className="container14">
              <Link href="/profile">
                <a className="link">
                  <div className="container15">
                    <MemberDetails image_src="/playground_assets/team1-200h.jpg"></MemberDetails>
                    <div className="container16">
                      <div className="container17">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="icon"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="container18">
                        <svg viewBox="0 0 1024 1024" className="icon02">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                      <div className="container19">
                        <svg viewBox="0 0 1024 1024" className="icon04">
                          <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a className="link1">
                  <div className="container20">
                    <MemberDetails
                      heading1="Romina Hadid"
                      heading11="Marketing Specialist"
                      image_src="/playground_assets/team2-200h.jpg"
                    ></MemberDetails>
                    <div className="container21">
                      <div className="container22">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="icon06"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="container23">
                        <svg viewBox="0 0 1024 1024" className="icon08">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a className="link2">
                  <div className="container24">
                    <MemberDetails
                      heading1="Alexa Smith"
                      heading11="UI/UX Designer"
                      image_src="/playground_assets/team6-200h.jpg"
                    ></MemberDetails>
                    <div className="container25">
                      <div className="container26">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="icon10"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="container27">
                        <svg viewBox="0 0 1024 1024" className="icon12">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                      <div className="container28">
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="icon14"
                        >
                          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a className="link3">
                  <div className="container29">
                    <MemberDetails
                      heading1="Jenna Kardi"
                      heading11="Founder and ceo"
                      image_src="/playground_assets/team4-200h.png"
                    ></MemberDetails>
                    <div className="container30">
                      <div className="container31">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="icon16"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="container32">
                        <svg viewBox="0 0 1024 1024" className="icon18">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                      <div className="container33">
                        <svg viewBox="0 0 1024 1024" className="icon20">
                          <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                        </svg>
                      </div>
                      <div className="container34">
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="icon22"
                        >
                          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
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
          .image1 {
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
          .container09 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .work-with-us {
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .container10 {
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
          .text22 {
            color: var(--dl-color-secondary-400);
            font-style: normal;
            font-weight: 700;
          }
          .container11 {
            flex: 0 0 auto;
            width: 33%;
            height: 462px;
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
          .container12 {
            width: 100%;
            height: 243px;
            display: flex;
            align-items: flex-end;
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/playground_assets/5-1500h.jpg');
            background-position: center;
          }
          .image2 {
            top: auto;
            left: auto;
            width: 100%;
            bottom: 0px;
            object-fit: cover;
            margin-bottom: -1px;
          }
          .text23 {
            color: #ffffff;
            width: 372px;
            font-size: 1.25rem;
            text-align: center;
          }
          .text24 {
            color: #f2f5f9ff;
            text-align: center;
          }
          .container13 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 86px;
            display: flex;
            align-items: flex-end;
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-1500w.png');
            background-position: center;
          }
          .image3 {
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
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .container14 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .link {
            display: contents;
          }
          .container15 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .container16 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .container17 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37BCF8;
          }
          .icon {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container18 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .icon02 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container19 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #EC4999;
          }
          .icon04 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .link1 {
            display: contents;
          }
          .container20 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .container21 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .container22 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #BD195D;
          }
          .icon06 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container23 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .icon08 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .link2 {
            display: contents;
          }
          .container24 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .container25 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .container26 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37BCF8;
          }
          .icon10 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container27 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .icon12 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container28 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #BD195D;
          }
          .icon14 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .link3 {
            display: contents;
          }
          .container29 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .container30 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .container31 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37BCF8;
          }
          .icon16 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container32 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .icon18 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container33 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #EC4999;
          }
          .icon20 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .container34 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #BD195D;
          }
          .icon22 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
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
            .container11 {
              width: 20rem;
              height: auto;
            }
            .text23 {
              width: 100%;
              height: 62px;
              text-align: center;
            }
            .text24 {
              width: auto;
              align-self: center;
              text-align: center;
            }
            .container13 {
              height: 73px;
            }
            .section2 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
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
            .container10 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container11 {
              width: 100%;
            }
            .container12 {
              height: 30rem;
            }
            .container13 {
              width: 100%;
              height: 163px;
            }
            .container14 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .container15 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container20 {
              width: 50%;
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .container24 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container29 {
              width: 50%;
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
            .container14 {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
