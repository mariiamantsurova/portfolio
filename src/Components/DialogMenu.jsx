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
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'unset')
  }, [])
  window.addEventListener('resize', () => {
    closeMenu()
  })
  return (
    <div className={Styles['dialog-menu']}>
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
  )
}

export default DialogMenu
