import React, { FC } from 'react';
import styles from './app.module.css';
import useCalculator from './hooks/useCalculator';
import CalculatorContext from './contexts/calculatorContext';
import Calculator from './components/calculator';

const App: FC = () => {
  const calculator = useCalculator();
  const { app } = styles;

  return (
    <div className={app}>
      <CalculatorContext.Provider value={calculator}>
        <Calculator />
      </CalculatorContext.Provider>
    </div>
  );
};

export default App;
