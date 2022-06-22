import React from 'react'
import './section.scss'

const Section = ({ title, fs = 1 }) => {
  return (
    <div className='section' style={{ fontSize: `${fs}rem` }}>
      {title}
    </div>
  )
}

export default Section