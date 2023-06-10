import { createSlice } from '@reduxjs/toolkit'
export const test1ArraySlice = createSlice({
  name: 'test1Array',  
  initialState:[],
  reducers: {
    test1AddQuestion: (state,action) => {
      const newQuestion = {
        id: Date.now(),
        text: action.payload, // Use the payload as the question text
      };
            return [...state, newQuestion];
    },
    test1DeleteQuestion:(state,action)=>
    {
      const id = action.payload;
      return state.filter(item => item.id!=id);
    }
  },
})
// Action creators are generated for each case reducer function
export const {test1AddQuestion, test1DeleteQuestion} = test1ArraySlice.actions
export default test1ArraySlice.reducer
