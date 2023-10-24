import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import test1Array from './test1Questionaire';
import test2Array from './test2Questionaire';
import test3Array from './test3Questionaire';
import test1bool from './test1bool';
import test2bool from './test2bool';
import test3bool from './test3bool';
import postarray from './postarray';
export const store = configureStore({
  reducer: {
    counter: countReducer,
    test1Array: test1Array,
    test2Array: test2Array,
    test3Array: test3Array,
    test1bool:test1bool,
    test2bool:test2bool,
    test3bool:test3bool,
    postarray:postarray,
  },
})