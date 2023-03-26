//react
import React, { Suspense } from 'react'
import { useRef, useState } from 'react'
//Icons
import logoIcon from '/icons/logo.svg'
import CVIcon from '/icons/CV.svg'
import ArrowIcon from '/icons/arrow-down.svg'
import htmlIcon from '/icons/html.svg'
import graphQLIcon from '/icons/graphql.svg'
import jsIcon from '/icons/javascript.svg'
import cssIcon from '/icons/css.svg'
import gitIcon from '/icons/git.svg'
import mongodbIcon from '/icons/mongodb.svg'
import tsIcon from '/icons/typescript.svg'
import reduxIcon from '/icons/redux.svg'
import reactIcon from '/icons/react.svg'
import mySqlIcon from '/icons/mysql.svg'
import nextJsIcon from '/icons/nextjs.svg'
import doughnutIcon from '/icons/doughnut.svg'
import russianIcon from '/icons/russian.svg'
import hebrewIcon from '/icons/hebrew.svg'
import englishIcon from '/icons/english.svg'
import pauseBtn from '/icons/pausecircle.svg'
import playBtn from '/icons/playcircle.svg'
//pdf CV
import CV from '/PDF/cv.pdf'

//three fiber
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
//Styles
import Styles from './styles/app.module.scss'
//Components
import Marguee from './Components/Margue'
import Cat from './Components/Cat'

export default function App() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const contactsRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const scrollToRef = (target) => {
    if (target.current !== null) {
      console.log(target?.current)
    }
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: 'smooth',
    })
  }
  const togglePause = () => {
    setPaused(!paused)
  }
  return (
    <div className="App">
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 150, 500] }}
        style={{ aspectRatio: '1/1' }}
        className={Styles['canvas']}
      >
        <Suspense fallback={null}>
          <ambientLight position={(0, 10, 0)} />
          <spotLight
            intensity={0.9}
            angle={0.5}
            penumbra={0}
            position={[5, 5, 0]}
            castShadow
          />
          <Cat rotation={[-25, 160, 0]} paused={paused} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
      <nav className={Styles['nav-bar']}>
        <div className={Styles['links']}>
          <button
            onClick={() => {
              scrollToRef(aboutRef)
            }}
          >
            /about me
          </button>
          <button
            onClick={() => {
              scrollToRef(skillsRef)
            }}
          >
            /skills
          </button>
          <button
            onClick={() => {
              scrollToRef(contactsRef)
            }}
          >
            /contacts
          </button>
        </div>
        <div className={Styles['btns-wrapper']}>
          <button
            onClick={() => {
              togglePause()
            }}
          >
            {paused ? (
              <img src={playBtn} alt="play animation button" />
            ) : (
              <img src={pauseBtn} alt="pause animaion button" />
            )}
          </button>
          <div className={Styles['logo-wrapper']}>
            <img src={logoIcon} alt="logo icon" />
          </div>
        </div>
      </nav>
      <section className={Styles['section-main']}>
        <main className={Styles['section-title']}>
          <h2>Hello,</h2>
          <h1>
            I’m Maria <br />
            Mantsurova
          </h1>
          <h3>{'<Full Stack Developer />'}</h3>
          <a href={CV} download="MyCV" target="_blank">
            <button className={Styles['download-cv-btn']}>
              <img
                src={CVIcon}
                alt="CV-download-icon"
                className={Styles['cv-icon']}
              />
              <img
                src={ArrowIcon}
                alt="CV-download-icon"
                className={Styles['arrow-icon']}
              />
            </button>
          </a>
        </main>
      </section>
      <section
        ref={aboutRef}
        style={{ minHeight: '100vh' }}
        className={Styles['section-aboutme']}
      >
        <Marguee styles="purple" />
        <Marguee styles="grey" />
        <div className={Styles['container-aboutme']}>
          <div className={Styles['about-title']}>
            <h2>About Me</h2>
            <h3>
              About <br /> Me
            </h3>
          </div>

          <div className={Styles['wrap-text-container']}>
            <div className={Styles['container-overflow']}>
              <p>
                I am a fullstack developer with 5+ years of experience in
                developing website applications, designing and developing
                web-based solutions, and integrating web technologies. I am
                skilled in JavaScript, Node.js, HTML, CSS, and React.js. I have
                a solid understanding of database systems and have experience
                with MySQL, MongoDB, and PostgreSQL. My experience also includes
                creating and developing Restful APIs, working with cloud
                services such as AWS, and developing and deploying web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={skillsRef}
        style={{ minHeight: '100vh' }}
        className={Styles['section-skills']}
      >
        <div className={Styles['skills-title']}>
          <h1>Skills</h1>
          <h2>Skills</h2>
        </div>
        <ul>
          <li>
            <img src={jsIcon} alt="Java Script" />
            Java Script
          </li>
          <li className={Styles['aqua-icon']}>
            <img src={reactIcon} alt="React Icon" />
            React
          </li>
          <li>
            <img src={reduxIcon} alt="Redux Icon" />
            Redux
          </li>
          <li>
            <img src={tsIcon} alt="TypeScript Icon" />
            Typescript
          </li>
          <li className={Styles['green-icon']}>
            <img src={cssIcon} alt="Css Icon" />
            css
          </li>
          <li>
            <img src={gitIcon} alt="Git Icon" />
            git
          </li>
          <li className={Styles['purple-icon']}>
            <img src={nextJsIcon} alt="Next Js Icon" />
            next.js
          </li>
          <li>
            <img src={graphQLIcon} alt="GraphQL Icon" />
            graphQL
          </li>
          <li className={Styles['purple-icon']}>
            <img
              src={mongodbIcon}
              alt="Mongodb Icon"
              className={Styles['mongodb-icon']}
            />
            mongodb
          </li>

          <li>
            <img src={htmlIcon} alt="Html Icon" />
            html
          </li>

          <li className={Styles['aqua-icon']}>
            <img src={mySqlIcon} alt="MySql Icon" />
            MySql
          </li>
        </ul>
        <div className={Styles['language-title']}>
          <h1>Languages</h1>
          <h2>Languages</h2>
        </div>
        <div className={Styles['charts']}>
          <div className={Styles['flex-wrapper']}>
            <div className={Styles['chart-wrapper']}>
              <img src={doughnutIcon} alt="doughnut" />
              <img
                src={russianIcon}
                alt="russianLevel"
                className={Styles['skill-level']}
              />
              <h1>100%</h1>
            </div>
            <h2>Russian</h2>
          </div>
          <div className={Styles['flex-wrapper']}>
            <div className={Styles['chart-wrapper']}>
              <img src={doughnutIcon} alt="doughnut" />
              <img
                src={englishIcon}
                alt="englishLevel"
                className={Styles['skill-level']}
              />
              <h1>90%</h1>
            </div>
            <h2>English</h2>
          </div>
          <div className={Styles['flex-wrapper']}>
            <div className={Styles['chart-wrapper']}>
              <img src={doughnutIcon} alt="doughnut" />
              <img
                src={hebrewIcon}
                alt="hebrewLevel"
                className={Styles['skill-level']}
              />
              <h1>90%</h1>
            </div>
            <h2>Hebrew</h2>
          </div>
        </div>
      </section>
      <section
        ref={contactsRef}
        style={{ minHeight: '100vh', position: 'relative' }}
      ></section>
    </div>
  )
}
