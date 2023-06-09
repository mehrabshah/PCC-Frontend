import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  
  initialState:{
    value:0 ,
  },

  reducers: {
    modifyCount: (state,action) => {
      state.value=action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { modifyCount } = counterSlice.actions

export default counterSlice.reducer