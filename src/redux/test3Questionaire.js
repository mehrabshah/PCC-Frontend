import { createSlice } from '@reduxjs/toolkit'
export const test3ArraySlice = createSlice({
  name: 'test3Array',  
  initialState:[],
  reducers: {
    test3AddQuestion: (state,action) => {
      console.log(state)
      const newQuestion = {
        id: Date.now(),
        text: action.payload, // Use the payload as the question text
      };
            return [...state, newQuestion];
    },
    test3DeleteQuestion:(state,action)=>
    {
      const id = action.payload;
      return state.filter(item => item.id!=id);
    }
  },
})
// Action creators are generated for each case reducer function
export const {test3AddQuestion, test3DeleteQuestion} = test3ArraySlice.actions
export default test3ArraySlice.reducer
