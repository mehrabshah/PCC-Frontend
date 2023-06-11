import { createSlice } from '@reduxjs/toolkit'
export const test1boolSlice = createSlice({
  name: 'test1bool',
  
  initialState:{
    value:false ,
  },

  reducers: {
    modifytest1bool: (state,action) => {
      state.value=action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { modifytest1bool } = test1boolSlice.actions

export default test1boolSlice.reducer