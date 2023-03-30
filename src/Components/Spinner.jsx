import React from 'react'
import Styles from '../styles/spinner.module.scss'
import spinnerBig from '/icons/spinner/spinnerBig.svg'
import spinnerSmall from '/icons/spinner/spinnerSmall.svg'
function Spinner() {
  return (
    <section className={Styles['spinnerPage']}>
      <div className={Styles['spinner-container']}>
        <div className={Styles['spinner-wrapper']}>
          <img
            src={spinnerBig}
            alt="spinner"
            className={Styles['spinnerBig']}
          />
          <img
            src={spinnerSmall}
            alt="spinner"
            className={Styles['spinnerSmall']}
          />
        </div>
      </div>
    </section>
  )
}

export default Spinner
