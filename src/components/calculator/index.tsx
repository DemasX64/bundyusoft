import React, { FC, useContext, useEffect } from 'react';
import Display from './display/display';
import styles from './index.module.css';
import keyInput from '../../utils/keyInput';
import CalculatorContext from '../../contexts/calculatorContext';
import Keypad from './keypad/keypad';

const Calculator: FC = () => {
  const useCalculator = useContext(CalculatorContext);

  const { outline, calculator } = styles;

  useEffect(() => {
    const keyInputHandler = (e: KeyboardEvent): void => {
      keyInput(e, useCalculator);
    };
    window.addEventListener('keydown', keyInputHandler);
    return () => window.removeEventListener('keydown', keyInputHandler);
  }, [useCalculator]);

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
