import { useState } from 'react';

interface ICalculator {
  isError: boolean
  query: string
  answer: number | null
  addChar: (char: string) => void
  clearQuery: () => void
  setIsError: (isError: boolean) => void
  setAnswer: (answer: number | null) => void
}

const useCalculator = (): ICalculator => {
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [answer, setAnswer] = useState<number | null>(null);

  const addChar = (char: string): void => {
    if (answer !== null) {
      setAnswer(null);
    }
    setIsError(false);
    setQuery(query + char);
  };

  const clearQuery = (): void => {
    setIsError(false);
    setQuery('');
    setAnswer(null);
  };

  return {
    isError,
    query,
    answer,
    addChar,
    clearQuery,
    setIsError,
    setAnswer,
  };
};

export default useCalculator;
