import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store';

import styles from './display.module.css';

const Display: FC = () => {
  const query = useSelector((state: RootState) => state.calculator.query);
  const answer = useSelector((state: RootState) => state.calculator.answer);
  const isError = useSelector((state: RootState) => state.calculator.isError);

  return (
    <div className={styles.display}>
      <div className={`${styles.query} ${(typeof answer === 'number') ? styles.move : ''} ${isError ? styles.error : ''}`}>{query}</div>
      {(typeof answer === 'number') && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

export default Display;
