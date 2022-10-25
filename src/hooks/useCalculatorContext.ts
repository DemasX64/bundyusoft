import { useContext } from 'react';
import CalculatorContext from '../contexts/calculatorContext';
import { ICalculator } from './useCalculator';

const useCalculatorContext = (): ICalculator => {
  const useCalculator = useContext(CalculatorContext);
  if (useCalculator == null) {
    throw new Error(
      'No CalculatorContext.Provider value passed',
    );
  }
  return useCalculator;
};

export default useCalculatorContext;
