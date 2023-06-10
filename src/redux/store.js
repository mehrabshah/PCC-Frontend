import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import test1ArrayReducer from './test1Questionaire';
import test2ArrayReducer from './test2Questionaire';
import test3ArrayReducer from './test3Questionaire';
export const store = configureStore({
  reducer: {
    counter: countReducer,
    test1Array: test1ArrayReducer,
    test2Array: test2ArrayReducer,
    test3Array: test2ArrayReducer,
  },
})