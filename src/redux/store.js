import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import test1Array from './test1Questionaire';
import test2Array from './test2Questionaire';
import test3Array from './test3Questionaire';
export const store = configureStore({
  reducer: {
    counter: countReducer,
    test1Array: test1Array,
    test2Array: test2Array,
    test3Array: test2Array,
  },
})