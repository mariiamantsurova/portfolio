import React, { useEffect } from 'react'
//styles
import Styles from '../styles/app.module.scss'

function Marguee({ styles }) {
  return (
    <div className={`${Styles['aboutme-line']} ${Styles[styles]}`}>
      <div className={Styles['text-wrapper-aboutme']}>
        <h2>about me </h2>
        <h2>about me </h2>
        <h2>about me </h2>
        <h2>about me </h2>
      </div>
    </div>
  )
}

export default Marguee
