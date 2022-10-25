import React, { FC, useEffect } from 'react';
import Display from './display/display';
import styles from './index.module.css';
import keyInput from '../../utils/keyInput';
import Keypad from './keypad/keypad';
import useCalculatorContext from '../../hooks/useCalculatorContext';

const Calculator: FC = () => {
  const calculatorContext = useCalculatorContext();

  const { outline, calculator } = styles;

  useEffect(() => {
    const keyInputHandler = (e: KeyboardEvent): void => {
      keyInput(e, calculatorContext);
    };
    window.addEventListener('keydown', keyInputHandler);
    return () => window.removeEventListener('keydown', keyInputHandler);
  }, [calculatorContext]);

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
