import { createSlice } from '@reduxjs/toolkit'
export const postArraySlice = createSlice({
  name: 'postArray',  
  initialState:"",

  reducers: {
    postArrayAdd: (state,action) => {
      const newPost = {
        jobTitle:action.payload.jobTitle,
        jobDescription:action.payload.jobDescription,
        jobTags:action.payload.jobTitle,

        
      };

    return [...state,newPost ]; 
    },
  },
})
// Action creators are generated for each case reducer function
export const {postArrayAdd} = postArraySlice.actions
export default postArraySlice.reducer
