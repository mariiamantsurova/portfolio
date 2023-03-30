import React from 'react'

function Title(styleMain, styleGraffiti, text) {
  return (
    <div className={Styles['title']}>
      <h2 style={style}>{text}</h2>
      <h3>{text}</h3>
    </div>
  )
}

export default Title
