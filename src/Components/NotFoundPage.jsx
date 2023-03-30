import React from 'react'
import Styles from '../styles/modal.module.scss'
import { Link } from 'react-router-dom'
import sadIcon from '/icons/notFoundPage/disapointicon1.svg'
import sadIcon2 from '/icons/notFoundPage/disapointicon2.svg'
import sadIcon3 from '/icons/notFoundPage/disapointicon3.svg'
function NotFoundPage() {
  const icons = [
    { src: sadIcon, style: 'icon1' },
    { src: sadIcon2, style: 'icon2' },
    { src: sadIcon3, style: 'icon3' },
  ]
  return (
    <section className={Styles['section']}>
      <div className={Styles['container']}>
        <div className={Styles['title']}>
          <h1>404</h1>
          <h2>404</h2>
        </div>
        <div className={Styles['text-wrapper']}>
          <h3>The page was not found</h3>
          <div className={Styles['Link-wrapper']}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link to="/">Go back to website</Link>
          </div>
        </div>
      </div>
      {icons.map(({ src, style }) => (
        <img key={style} src={src} className={`${Styles[style]}`} />
      ))}
    </section>
  )
}

export default NotFoundPage
