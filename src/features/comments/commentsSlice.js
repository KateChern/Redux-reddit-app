import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const commentsAdapter = createEntityAdapter(
  {
    // selectId: (post => post.id)
  }
)

const initialState = commentsAdapter.getInitialState({
    error: null,
    commentsStatus: 'idle',
    permalink: '/r/pics/comments/mdh3v6/dirt_soothes_her/'
})

export const API_ROOT = 'https://www.reddit.com';

export const getComments = createAsyncThunk('comments/fetchComments', async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    const commentData = json[1].data.children.map(post => post.data) 
    return commentData
    //  console.log(commentData);
  });
  // export const getSubComments = createAsyncThunk('comments/fetchSubComments', async (permalink) => {
  //   const response = await fetch(`${API_ROOT}${permalink}.json`);
  //   const json = await response.json();
  //   const commentData = json[1].data.children.map(post => post.data) 
    
  //   const userData = await fetch(`${API_ROOT}${commentData.permalink}.json`).then(response1 => response1.json())
   
    
  //   // return userData
  
  //    console.log(userData);
  // });
// export const fetchPosts2 =  async() => {
//     const response = await fetch(`${API_ROOT}/r/pics/comments/mdh3v6/dirt_soothes_her/.json`);
//     const json = await response.json();
//     const commentData = json[1].data.children.map(post => post.data) 
//     return commentData
//     // console.log(commentData);
//   }

// fetchPosts2()

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
      setPermalink(state, action) {
      state.permalink = action.payload;
    }, 

  },
    extraReducers: {
      [getComments.pending]: (state, action) => {
        state.commentsStatus = 'loading'
      },
      [getComments.fulfilled]: (state, action) => {
        state.commentsStatus = 'succeeded'
        commentsAdapter.setAll(state, action.payload)
      },
      [getComments.rejected]: (state, action) => {
        state.commentsStatus = 'failed'
        state.error = action.error.message
      },
      // [getSubComments.fulfilled]: (state, action) => {
      //   commentsAdapter.setAll(state, action.payload)
      // },
    }
})


// export const selectSubreddits = (state) => state.subreddits.subreddits;
export default commentsSlice.reducer;
export const {setPermalink} = commentsSlice.actions

export const {
  selectAll: selectAllComments,
  selectById: selectCommentsById,
  selectIds: selectCommentsds,
} = commentsAdapter.getSelectors((state) => state.comments)