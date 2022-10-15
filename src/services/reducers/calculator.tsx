import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface CalculatorState {
  isError: boolean,
  query: string,
  answer: Number | null,
}

const initialState = {
  isError: false,
  query:'',
  answer: null
} as CalculatorState

const calculatorReducer = createSlice({
  name:'calculator',
  initialState,
  reducers: {
    addChar(state, action: PayloadAction<string>) {
      //if(state.query.slice(-1).isNan)
      if(state.answer!==null) {
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
    setAnswer(state, action){
      state.answer = action.payload;
    },
    setError(state) {
      state.isError = true;
    }
  }
})

export const {addChar, clearQuery, setAnswer, setError} = calculatorReducer.actions
export default calculatorReducer.reducer;