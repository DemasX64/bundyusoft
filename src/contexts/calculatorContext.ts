import { createContext } from 'react';
import { ICalculator } from '../hooks/useCalculator';

const CalculatorContext = createContext<ICalculator>();

export default CalculatorContext;
