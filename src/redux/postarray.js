import { createSlice } from '@reduxjs/toolkit'
export const postArraySlice = createSlice({
  name: 'postArray',  
  initialState:"",

  reducers: {
    postArrayAdd: (state,action) => {
        console.log("state",state);
        console.log("action",action)
        return action.payload;
    },
  },
})
// Action creators are generated for each case reducer function
export const {postArrayAdd} = postArraySlice.actions
export default postArraySlice.reducer
