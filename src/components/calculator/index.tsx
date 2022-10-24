import React, { FC, useContext, useEffect } from 'react';
import Display from './display/display';
import Keypad from './keypad/keypad';
import styles from './index.module.css';
import keyInput from '../../utils/keyInput';
import { CalculatorContext } from '../../App';

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
