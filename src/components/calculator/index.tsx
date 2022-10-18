import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Display from './display/display';
import Keypad from './keypad/keypad';
import styles from './index.module.css';
import { clearQuery } from '../../services/reducers/calculator';

const enterKeyCode = 13;
const escKeyCode = 27;

const Calculator: FC = () => {
  const dispatch = useDispatch();
  const { outline, calculator } = styles;

  useEffect(() => {
    const closeModal = (e: KeyboardEvent): void => {
      if (e.keyCode === escKeyCode) {
        dispatch(clearQuery());
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [dispatch]);

  useEffect(() => {
    const closeModal = (e: KeyboardEvent): void => {
      if (e.keyCode === enterKeyCode) {
        dispatch(clearQuery());
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [dispatch]);

  return (
    <div className={outline}>
      <div className={calculator}>
        <Display />
        <hr className={styles.divider} />
        <Keypad />
      </div>
    </div>
  );
};

export default Calculator;
