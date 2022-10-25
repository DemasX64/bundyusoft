import React, { FC } from 'react';
import useCalculatorContext from '../../../hooks/useCalculatorContext';

import styles from './display.module.css';

const Display: FC = () => {
  const calculatorContext = useCalculatorContext();
  const { query, answer, isError } = calculatorContext;

  return (
    <div className={styles.display}>
      <div className={`${styles.query} ${(typeof answer === 'number') ? styles.move : ''} ${isError ? styles.error : ''}`} data-testid="input">{query}</div>
      {(typeof answer === 'number') && <div className={styles.answer} data-testid="answer">{answer}</div>}
    </div>
  );
};

export default Display;
