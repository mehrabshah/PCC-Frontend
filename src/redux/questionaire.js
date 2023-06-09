import { createSlice } from '@reduxjs/toolkit'
export const arraySlice = createSlice({
  name: 'array',
  
  initialState:[],
  reducers: {
    AddQuestion: (state,action) => {
      const newQuestion = {
        id: Date.now(),
        text: action.payload, // Use the payload as the question text
      };


        
            return [...state, newQuestion];
    },
    DeleteQuestion:(state,action)=>
    {
      const id = action.payload;
      
      return state.filter(item => item.id!=id);
    }
  },
})

// Action creators are generated for each case reducer function
export const {AddQuestion, DeleteQuestion} = arraySlice.actions
export default arraySlice.reducer