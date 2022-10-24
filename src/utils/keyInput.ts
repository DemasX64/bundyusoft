import { ICalculator } from '../hooks/useCalculator';
import { calculate, haveErrors } from './calculator';

const enterKey = 'Enter';
const escKey = 'Escape';
const openBracketKey = '(';
const closeBracketKey = ')';

const oneKey = '1';
const twoKey = '2';
const threeKey = '3';
const fourKey = '4';
const fiveKey = '5';
const sixKey = '6';
const sevenKey = '7';
const eightKey = '8';
const nineKey = '9';
const zeroKey = '0';

const multiplyKey = '*';
const divideKey = '/';
const plusKey = '+';
const minusKey = '-';
const percentKey = '%';

const equalKey = '=';

const keyInput = (e: KeyboardEvent, calculator: ICalculator): void => {
  const {
    query, clearQuery, setAnswer, addChar, setIsError,
  } = calculator;
  switch (e.key) {
    case escKey:
      clearQuery();
      break;
    case equalKey:
      setAnswer(calculate(query));
      break;
    case enterKey:
      if (!haveErrors(query)) {
        setAnswer(calculate(query));
      } else {
        setIsError(true);
      }
      break;
    case openBracketKey:
      addChar(openBracketKey);
      break;
    case closeBracketKey:
      addChar(closeBracketKey);
      break;
    case oneKey:
      addChar(oneKey);
      break;
    case twoKey:
      addChar(twoKey);
      break;
    case threeKey:
      addChar(threeKey);
      break;
    case fourKey:
      addChar(fourKey);
      break;
    case fiveKey:
      addChar(fiveKey);
      break;
    case sixKey:
      addChar(sixKey);
      break;
    case sevenKey:
      addChar(sevenKey);
      break;
    case eightKey:
      addChar(eightKey);
      break;
    case nineKey:
      addChar(nineKey);
      break;
    case zeroKey:
      addChar(zeroKey);
      break;
    case multiplyKey:
      addChar('×');
      break;
    case divideKey:
      addChar(divideKey);
      break;
    case plusKey:
      addChar(plusKey);
      break;
    case minusKey:
      addChar(minusKey);
      break;
    case percentKey:
      addChar(percentKey);
      break;
    default:
      break;
  }
};

export default keyInput;
