/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-plusplus */
function iter(firstNumber: number, secondNumber: number, operator: string): number {
  switch (operator) {
    case '/':
      return firstNumber / secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '%':
      return (firstNumber / secondNumber) * 100;
    case '√':
      return firstNumber * Math.sqrt(secondNumber);
    default:
      return 1;
  }
}
function findEndBracket(query: string, startBracket: number): number {
  let brackets = 0;
  for (let i = startBracket + 1; i < query.length; i++) {
    if (query[i] === '(') {
      brackets++;
    }
    if (query[i] === ')') {
      if (brackets === 0) {
        return i;
      // eslint-disable-next-line no-else-return
      } else {
        brackets--;
      }
    }
  }
  return 0;
}

export function calculate(input: string): number {
  let query = input;
  query = query.replaceAll('×', '*');
  query = query.replaceAll(',', '.');

  const reg = /[-+*/%√]/;
  for (let i = 1; i < query.length; i++) {
    if (query[i] === '√' && reg.test(query[i - 1])) {
      query = `${query.slice(0, i)}1${query.slice(i, query.length)}`;
    }
  }
  if (query[0] === '√') {
    query = `1${query}`;
  }
  if (query[0] === '-') {
    query = `0${query}`;
  }
  query = findBrackets(query);
  const counters = query.split(/[-+*/%√]/).filter((el: string) => el !== '');
  const operators = query.split(/[\d.]/).filter((el: string) => el !== '');
  operators.forEach((el: string, index: number) => {
    if (el.length > 1) {
      counters[index + 1] = el[1] + counters[index + 1];
      operators[index] = el.slice(0, 1);
    }
  });
  while (operators.length > 0) {
    let nextOpIndex = 0;
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === '*' || operators[i] === '/' || operators[i] === '%' || operators[i] === '√') {
        nextOpIndex = i;
      }
    }
    const count = iter(
      Number(counters[nextOpIndex]),
      Number(counters[nextOpIndex + 1]),
      operators[nextOpIndex],
    );
    operators.splice(nextOpIndex, 1);
    counters.splice(nextOpIndex, 1);
    counters[nextOpIndex] = String(count);
  }
  return Number(counters[0]);
}

function findBrackets(query: string): string {
  let result = query;
  let index = 0;
  const startBrackets = [];
  const endBrackets = [];
  while (index <= query.length - 1) {
    const startBracket = query.indexOf('(', index);
    if (startBracket !== -1) {
      startBrackets.push(startBracket);
      const endBracket = findEndBracket(query, startBracket);
      endBrackets.push(endBracket);
      index = endBracket;
    }
    index++;
  }
  for (let i = 0; i < startBrackets.length; i++) {
    const newQuery = query.slice(startBrackets[i], endBrackets[i] + 1);
    const strResult = calculate(newQuery.slice(1, -1));
    result = result.replace(newQuery, String(strResult));
  }
  return result;
}

export function haveErrors(query: string): boolean {
  let openBrackets = 0;
  let closeBrackets = 0;
  for (let i = 0; i < query.length; i++) {
    if (query[i] === '(') {
      openBrackets++;
    }
    if (query[i] === ')') {
      closeBrackets++;
    }
  }
  const operatorsAtStart = /[+*/%×]/;
  const operatorsAtEnd = /[-+*/%√×]/;
  if (operatorsAtStart.test(query[0]) || operatorsAtEnd.test(query[query.length - 1])) {
    return true;
  }
  if (openBrackets !== closeBrackets) {
    return true;
  }
  return false;
}
