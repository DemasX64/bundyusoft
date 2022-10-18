import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KeyButton from '../key-button/key-button';
import styles from './keypad.module.css';
import {
  addChar, clearQuery, setAnswer, setError,
} from '../../../services/reducers/calculator';
import { calculate, haveErrors } from '../../../utils/calculator';
import { RootState } from '../../../services/reducers/store';

const Keypad: FC = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.calculator.query);
  const answer = useSelector((state: RootState) => state.calculator.answer);

  const { keypad } = styles;

  const addCharHandle = (char: string): void => {
    dispatch(addChar(char));
  };

  const equalHandler = (): void => {
    console.log(haveErrors(query));
    if (!haveErrors(query)) {
      dispatch(setAnswer(calculate(query)));
    } else {
      dispatch(setError());
    }
  };

  const clearHandle = (): void => {
    dispatch(clearQuery());
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
