import { createSlice } from '@reduxjs/toolkit'
export const test2boolSlice = createSlice({
  name: 'test2bool',
  
  initialState:{
    value:false ,
  },

  reducers: {
    modifytest2bool: (state,action) => {
      state.value=action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { modifytest2bool } = test2boolSlice.actions

export default test2boolSlice.reducer