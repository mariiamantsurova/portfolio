//react
import React, { Suspense, useEffect } from 'react'
import { useRef, useState } from 'react'
//Icons
import logoIcon from '/icons/logo.svg'
import CVIcon from '/icons/CV.svg'
import ArrowIcon from '/icons/arrow-down.svg'
import htmlIcon from '/icons/skills/html.svg'
import graphQLIcon from '/icons/skills/graphql.svg'
import jsIcon from '/icons/skills/javascript.svg'
import cssIcon from '/icons/skills/css.svg'
import gitIcon from '/icons/skills/git.svg'
import mongodbIcon from '/icons/skills/mongodb.svg'
import tsIcon from '/icons/skills/typescript.svg'
import reduxIcon from '/icons/skills/redux.svg'
import reactIcon from '/icons/skills/react.svg'
import mySqlIcon from '/icons/skills/mysql.svg'
import nextJsIcon from '/icons/skills/nextjs.svg'
import pauseBtn from '/icons/pausecircle.svg'
import playBtn from '/icons/playcircle.svg'
import emailIcon from '/icons/email.svg'
import githubIcon from '/icons/githubIcon.svg'
import linkedinIcon from '/icons/linkedinIcon.svg'
import burgerIcon from '/icons/burger.svg'
//pdf CV
import CV from '/PDF/cv.pdf'

//three fiber
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
//Styles
import Styles from '../styles/app.module.scss'
//Components
import Marguee from '../Components/Margue'
import Cat from '../Components/Cat'
import DialogMenu from '../Components/DialogMenu'
import Spinner from '../Components/Spinner'
//api
import fontLoader from '../Functions/FontLoader'

function Home() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const contactsRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const iconsArray = [
    {
      iconSrc: jsIcon,
      iconName: 'Java Script',
    },
    {
      iconSrc: reactIcon,
      iconName: 'React',
    },
    {
      iconSrc: reduxIcon,
      iconName: 'Redux',
    },
    {
      iconSrc: tsIcon,
      iconName: 'Typescript',
    },
    {
      iconSrc: cssIcon,
      iconName: 'css',
    },
    {
      iconSrc: gitIcon,
      iconName: 'git',
    },
    {
      iconSrc: nextJsIcon,
      iconName: 'Next.js',
    },
    {
      iconSrc: graphQLIcon,
      iconName: 'GraphQL',
    },
    {
      iconSrc: mongodbIcon,
      iconName: 'mongodb',
    },
    {
      iconSrc: htmlIcon,
      iconName: 'html',
    },
    {
      iconSrc: mySqlIcon,
      iconName: 'MySQL',
    },
  ]

  const scrollToRef = (target) => {
    if (target.current !== null) {
    }
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: 'smooth',
    })
  }
  const togglePause = () => {
    setPaused(!paused)
  }
  const showMenu = () => {
    if (!showDialog) {
      setShowDialog(true)
    }
  }
  const closeMenu = () => {
    if (showDialog) {
      setShowDialog(false)
    }
  }

  return (
    <div className="Home">
      {showDialog ? (
        <DialogMenu
          scrollToRef={scrollToRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          contactsRef={contactsRef}
          closeMenu={closeMenu}
        />
      ) : null}
      <nav className={Styles['nav-bar']}>
        <button
          className={Styles['burger-menu']}
          onClick={() => {
            showMenu()
          }}
        >
          <img src={burgerIcon} alt="burger icon" />
        </button>
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
            /contact
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
        </main>
        <Canvas
          orthographic
          camera={{ zoom: 1, position: [0, 150, 500] }}
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
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
        <button className={Styles['download-cv-btn']}>
          <a href={CV} download="MyCV" target="_blank">
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
          </a>
        </button>
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
        style={{ MinHeight: '60vh' }}
        className={Styles['section-skills']}
      >
        <div className={Styles['skills-title']}>
          <h1>Skills</h1>
          <h2>Skills</h2>
        </div>
        <ul>
          {iconsArray.map(({ iconSrc, iconName }, index) => {
            return (
              <li key={index}>
                <img src={iconSrc} alt={iconName} />
                {iconName}
              </li>
            )
          })}
        </ul>
      </section>
      <section
        ref={contactsRef}
        style={{ minHeight: '100vh' }}
        className={Styles['section-contact']}
      >
        <div className={Styles['title-contact']}>
          <h1>Contact me</h1>
          <h2>Contact me</h2>
        </div>
        <p>
          if you have any questions or job offer you can contact me on my email
          or send a message in a form below
        </p>

        <form
          target="_blank"
          action="https://formsubmit.co/marimantsurova@gmail.com"
          method="POST"
          className={Styles['form-contact']}
        >
          <div className={Styles['email-wrapper']}>
            <img src={emailIcon} alt="emailicon" />
            <h3>marimantsurova@gmail.com</h3>
          </div>
          <input name="name" placeholder="name" required />
          <input type="email" name="email" placeholder="email" required />
          <input name="subject" placeholder="subject" required />
          <input name="message" placeholder="message" required />
          <input
            type="hidden"
            name="_next"
            value="https://main--candid-salamander-d0e811.netlify.app/thankyou"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <footer className={Styles['footer']}>
        <div className={Styles['links']}>
          <a href="https://www.linkedin.com/in/maria-mantsurova-6b86b7245">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="https://github.com/mariiamantsurova?tab=repositories">
            <img src={githubIcon} alt="" />
          </a>
        </div>
        <h3>
          Copyright © 2023 Maria Mantsurova.
          <br /> All rights reserved
        </h3>
      </footer>
    </div>
  )
}

export default function LandingPage() {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    fontLoader(setLoading)
  }, [])
  return <div className="App">{Loading ? <Spinner /> : <Home />}</div>
}
