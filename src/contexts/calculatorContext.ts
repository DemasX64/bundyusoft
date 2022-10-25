import { createContext } from 'react';
import { ICalculator } from '../hooks/useCalculator';

const CalculatorContext = createContext<ICalculator | undefined>(undefined);

export default CalculatorContext;
