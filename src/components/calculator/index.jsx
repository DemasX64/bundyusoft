import React, { useEffect } from 'react'
import Display from './display/display';
import Keypad from './keypad/keypad';
import styles from './index.module.css';
import {useDispatch} from 'react-redux'
import { clearQuery, setError } from '../../services/reducers/calculator';

const enterKeyCode = 13;
const escKeyCode = 27;

function Calculator() {

  const dispatch = useDispatch()
  const {outline, calculator} = styles;

  useEffect(() => {
    const closeModal = (e) => {
      if (e.keyCode === escKeyCode) {
       dispatch(clearQuery());
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);

  useEffect(() => {
    const closeModal = (e) => {
      if (e.keyCode === enterKeyCode) {
       dispatch(clearQuery());
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);

  return (
    <div className={outline}>
      <div className={calculator}>
        <Display />
        <hr className={styles.divider} />
        <Keypad />
      </div>
    </div>
  )
}

export default Calculator;