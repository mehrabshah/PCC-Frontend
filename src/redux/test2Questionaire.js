import { createSlice } from '@reduxjs/toolkit'
export const test2ArraySlice = createSlice({
  name: 'test2Array',  
  initialState:[],
  reducers: {
    test2AddQuestion: (state,action) => {
      console.log(state)
      const newQuestion = {
        id: Date.now(),
        text: action.payload, // Use the payload as the question text
      };
            return [...state, newQuestion];
    },
    test2DeleteQuestion:(state,action)=>
    {
      const id = action.payload;
      return state.filter(item => item.id!=id);
    }
  },
})
// Action creators are generated for each case reducer function
export const {test2AddQuestion, test2DeleteQuestion} = test2ArraySlice.actions
export default test2ArraySlice.reducer
