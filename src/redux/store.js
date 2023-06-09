import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import arrayReducer from './questionaire';
export const store = configureStore({
  reducer: {
    counter: countReducer,
    array: arrayReducer,
  },
})