import React, { FC, useContext } from 'react';
import KeyButton from '../key-button/key-button';
import styles from './keypad.module.css';
import { calculate, haveErrors } from '../../../utils/calculator';
import CalculatorContext from '../../../contexts/calculatorContext';

const Keypad: FC = () => {
  const calculatorContext = useContext(CalculatorContext);
  const {
    query, answer, addChar, setIsError, clearQuery, setAnswer,
  } = calculatorContext;

  const { keypad } = styles;

  const addCharHandle = (char: string): void => {
    addChar(char);
  };

  const equalHandler = (): void => {
    if (!haveErrors(query)) {
      setAnswer(calculate(query));
    } else {
      setIsError(true);
    }
  };

  const clearHandle = (): void => {
    clearQuery();
  };

  return (
    <div className={keypad}>
      <KeyButton value="C" onClick={clearHandle} />
      <KeyButton value="√" onClick={addCharHandle} />
      <KeyButton value="%" onClick={addCharHandle} />
      <KeyButton value="/" onClick={addCharHandle} />
      <KeyButton value="7" onClick={addCharHandle} />
      <KeyButton value="8" onClick={addCharHandle} />
      <KeyButton value="9" onClick={addCharHandle} />
      <KeyButton value="×" onClick={addCharHandle} />
      <KeyButton value="4" onClick={addCharHandle} />
      <KeyButton value="5" onClick={addCharHandle} />
      <KeyButton value="6" onClick={addCharHandle} />
      <KeyButton value="-" onClick={addCharHandle} />
      <KeyButton value="1" onClick={addCharHandle} />
      <KeyButton value="2" onClick={addCharHandle} />
      <KeyButton value="3" onClick={addCharHandle} />
      <KeyButton value="+" onClick={addCharHandle} />
      <KeyButton value="00" onClick={addCharHandle} />
      <KeyButton value="0" onClick={addCharHandle} />
      <KeyButton value="," onClick={addCharHandle} />
      <KeyButton value="=" isActive={typeof answer === 'number'} onClick={equalHandler} />
    </div>
  );
};

export default Keypad;
