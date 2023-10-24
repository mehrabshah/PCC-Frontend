import { createSlice } from '@reduxjs/toolkit'
export const test3boolSlice = createSlice({
  name: 'test3bool',
  
  initialState:{
    value:false ,
  },

  reducers: {
    modifytest3bool: (state,action) => {
      state.value=action.payload;
    },
   
  },
})
// Action creators are generated for each case reducer function
export const { modifytest3bool } = test3boolSlice.actions
export default test3boolSlice.reducer