import React from 'react'
import { useSelector } from 'react-redux';
import styles from './display.module.css'
 
function Display() {

  const query = useSelector((state) => state.calculator.query);
  const answer = useSelector((state) => state.calculator.answer);
  const isError = useSelector((state) => state.calculator.isError);

  return (
    <div className={styles.display}>
      <div className={`${styles.query} ${answer?styles.move:''} ${isError?styles.error:''}`}>{query}</div>
      {answer && <div className={styles.answer}>{answer}</div>}
    </div>
  )
}

export default Display;