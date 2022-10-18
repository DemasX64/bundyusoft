/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICalculatorState {
  isError: boolean
  query: string
  answer: number | null
}

const initialState: ICalculatorState = {
  isError: false,
  query: '',
  answer: null,
};

const calculatorReducer = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addChar(state, action: PayloadAction<string>) {
      if (state.answer !== null) {
        state.answer = null;
      }
      state.isError = false;
      state.query += action.payload;
    },
    clearQuery(state) {
      state.query = '';
      state.answer = null;
      state.isError = false;
    },
    setAnswer(state, action: PayloadAction<number>) {
      state.answer = action.payload;
    },
    setError(state) {
      state.isError = true;
    },
  },
});

export const {
  addChar, clearQuery, setAnswer, setError,
} = calculatorReducer.actions;
export default calculatorReducer.reducer;
