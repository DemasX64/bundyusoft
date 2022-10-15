import React from 'react'
import styles from './background.module.css'

const Background = (props) => {
  const {children} = props;
  return (
    <div>{children}</div>
  )
}

export default Background;