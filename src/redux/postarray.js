import { createSlice } from '@reduxjs/toolkit'
export const postArraySlice = createSlice({
  name: 'postArray',  
  initialState:[],

  
  reducers: {
    postArrayAdd: (state,action) => {
        
        const newPost = {
            jobTitle:action.payload.jobTitle,
            jobDescription:action.payload.jobDescription,
            jobTags:action.payload.jobTitle,
            
            // Use the payload as the question text
          };
        
        return [...state,newPost ]; 
    },
  },
})
// Action creators are generated for each case reducer function
export const {postArrayAdd} = postArraySlice.actions
export default postArraySlice.reducer
