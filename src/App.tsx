import React, { FC, createContext } from 'react';
import Calculator from './components/calculator';
import styles from './app.module.css';
import useCalculator, { ICalculator } from './hooks/useCalculator';

export const CalculatorContext = createContext<ICalculator>();

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
