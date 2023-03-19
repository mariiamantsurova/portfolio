//react
import React from 'react'
import { useRef } from 'react'
//Icons
import logoIcon from '../public/icons/logo.svg'
import CVIcon from '../public/icons/CV.svg'
import ArrowIcon from '../public/icons/arrow-down.svg'
import htmlIcon from '../public/icons/html.svg'
import graphQLIcon from '../public/icons/graphQL.svg'
import jsIcon from '../public/icons/javascript.svg'
import cssIcon from '../public/icons/css.svg'
import gitIcon from '../public/icons/git.svg'
import mongodbIcon from '../public/icons/mongodb.svg'
import tsIcon from '../public/icons/typescript.svg'
import reduxIcon from '../public/icons/redux.svg'
import reactIcon from '../public/icons/react.svg'
import mySqlIcon from '../public/icons/mysql.svg'
import nextJsIcon from '../public/icons/nextjs.svg'
import doughnutIcon from '../public/icons/doughnut.svg'
import russianIcon from '../public/icons/russian.svg'
import hebrewIcon from '../public/icons/hebrew.svg'
import englishIcon from '../public/icons/english.svg'
//Canvas
import Canvas from './Canvas'
//Styles
import Styles from './styles/app.module.scss'
//Components
import Marguee from './Components/Margue'
import MapView from './Components/Map'

function App() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const contactsRef = useRef(null)
  const scrollToRef = (target) => {
    if (target.current !== null) {
      console.log(target?.current)
    }
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <div className="App">
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
        <div className={Styles['logo-wrapper']}>
          <img src={logoIcon} alt="" />
        </div>
      </nav>
      <section className={Styles['section-main']}>
        <h2>Hello,</h2>
        <h1>
          I’m Maria <br />
          Mantsurova
        </h1>
        <h3>{'<Full Stack Developer />'}</h3>
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
      </section>
      <Canvas />
      <section
        ref={aboutRef}
        style={{ height: '100vh' }}
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
        style={{ height: '100vh' }}
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
        style={{ height: '100vh', position: 'relative' }}
      >
        <MapView />
      </section>
    </div>
  )
}

export default App
