import { Dispatch } from 'redux';
import { addChar, clearQuery, setAnswer } from '../services/reducers/calculator';
import { calculate } from './calculator';

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

const keyInput = (e: KeyboardEvent, dispatch: Dispatch, query: string): void => {
  switch (e.key) {
    case escKey:
      dispatch(clearQuery());
      break;
    case equalKey:
      dispatch(setAnswer(calculate(query)));
      break;
    case enterKey:
      dispatch(setAnswer(calculate(query)));
      break;
    case openBracketKey:
      dispatch(addChar(openBracketKey));
      break;
    case closeBracketKey:
      dispatch(addChar(closeBracketKey));
      break;
    case oneKey:
      dispatch(addChar(oneKey));
      break;
    case twoKey:
      dispatch(addChar(twoKey));
      break;
    case threeKey:
      dispatch(addChar(threeKey));
      break;
    case fourKey:
      dispatch(addChar(fourKey));
      break;
    case fiveKey:
      dispatch(addChar(fiveKey));
      break;
    case sixKey:
      dispatch(addChar(sixKey));
      break;
    case sevenKey:
      dispatch(addChar(sevenKey));
      break;
    case eightKey:
      dispatch(addChar(eightKey));
      break;
    case nineKey:
      dispatch(addChar(nineKey));
      break;
    case zeroKey:
      dispatch(addChar(zeroKey));
      break;
    case multiplyKey:
      dispatch(addChar('×'));
      break;
    case divideKey:
      dispatch(addChar(divideKey));
      break;
    case plusKey:
      dispatch(addChar(plusKey));
      break;
    case minusKey:
      dispatch(addChar(minusKey));
      break;
    case percentKey:
      dispatch(addChar(percentKey));
      break;
    default:
      break;
  }
};

export default keyInput;
