import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Display from './display/display';
import Keypad from './keypad/keypad';
import styles from './index.module.css';
import keyInput from '../../utils/keyInput';
import { RootState } from '../../services/store';

const Calculator: FC = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.calculator.query);
  const { outline, calculator } = styles;

  useEffect(() => {
    const keyInputHandler = (e: KeyboardEvent): void => {
      keyInput(e, dispatch, query);
    };
    window.addEventListener('keydown', keyInputHandler);
    return () => window.removeEventListener('keydown', keyInputHandler);
  }, [dispatch, query]);

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
