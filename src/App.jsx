//react
import React from 'react'
import { useRef } from 'react'
//Icons
import logoIcon from '../public/icons/logo.svg'
import CVIcon from '../public/icons/CV.svg'
//Canvas
import Canvas from './Canvas'
//Styles
import Styles from './styles/app.module.scss'
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
      <section className={Styles['main']}>
        <h2>Hello,</h2>
        <h1>
          i’m Maria <br />
          Mantsurova
        </h1>
        <h3>{'<full stack developer />'}</h3>
        <img src={CVIcon} alt="" />
      </section>
      <Canvas />
      <section ref={aboutRef} style={{ height: '100vh' }}></section>
      <section ref={skillsRef} style={{ height: '100vh' }}></section>
      <section ref={contactsRef} style={{ height: '100vh' }}></section>
    </div>
  )
}

export default App
