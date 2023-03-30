import React, { useEffect } from 'react'
import Styles from '../styles/dialogmenu.module.scss'
function DialogMenu({
  scrollToRef,
  aboutRef,
  skillsRef,
  contactsRef,
  closeMenu,
}) {
  useEffect(() => {
    window.addEventListener('resize', () => {
      closeMenu()
    })
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'unset')
  }, [])

  return (
    <div className={Styles['dialog-menu']} onClick={() => closeMenu()}>
      <div className={Styles['btn-wrapper']}>
        <button
          onClick={() => {
            scrollToRef(aboutRef)
            closeMenu()
          }}
        >
          /about me
        </button>
        <button
          onClick={() => {
            scrollToRef(skillsRef)
            closeMenu()
          }}
        >
          /skills
        </button>
        <button
          onClick={() => {
            scrollToRef(contactsRef)
            closeMenu()
          }}
        >
          /contact
        </button>
      </div>
    </div>
  )
}

export default DialogMenu
