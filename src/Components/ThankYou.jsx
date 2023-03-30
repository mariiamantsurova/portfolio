import React from 'react'
import Styles from '../styles/modal.module.scss'
import { Link } from 'react-router-dom'
import happyIcon1 from '/icons/ThankYou/happyicon1.svg'
import happyicon2 from '/icons/ThankYou/happyicon2.svg'
import happyicon3 from '/icons/ThankYou/happyicon3.svg'
function ThankYou() {
  const icons = [
    { src: happyIcon1, style: 'icon1' },
    { src: happyicon2, style: 'icon2' },
    { src: happyicon3, style: 'icon3' },
  ]
  return (
    <section className={Styles['section']}>
      <div
        className={Styles['container']}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5rem',
        }}
      >
        <div className={Styles['title']}>
          <h1>Thank You</h1>
          <h2>Thank You</h2>
        </div>
        <div className={Styles['Link-wrapper']}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link to="/">Go back to website</Link>
        </div>
      </div>
      {icons.map(({ src, style }) => (
        <img key={style} src={src} className={`${Styles[style]}`} />
      ))}
    </section>
  )
}

export default ThankYou
