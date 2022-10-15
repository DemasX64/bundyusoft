import React from 'react'
import styles from './key-button.module.css'

function KeyButton(props) {
  const {onClick, value, isActive} = props;
  const {keyButton, active, inactive} = styles; 
  return (
    <div className={`${keyButton} ${isActive?active:inactive}`} onClick={()=>onClick(value)}>{value}</div>
  )
}

export default KeyButton;