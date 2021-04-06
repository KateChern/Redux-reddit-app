import { createAsyncThunk, createSlice,  createEntityAdapter } from '@reduxjs/toolkit'

const postsAdapter = createEntityAdapter(
  { 
    selectId: (posts => posts.id), 
    // sortComparer: (a: posts.ups, b: posts.ups) => b.localeCompare(a),
  }
)


const initialState = postsAdapter.getInitialState({
  entities: { } ,
  
  status: 'idle',
  error: null,
  selectedSubreddit: '/r/pics/',
})

export const API_ROOT = 'https://www.reddit.com';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async(subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json?limit=100`)
  const dataRow = await response.json()
  return dataRow.data.children.map((post) => post.data)
})



const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      postsAdapter.setAll(state, action.payload)
      
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    
  }
})

export const {setSelectedSubreddit} = postsSlice.actions

export const selectSelectedSubreddit = (state) =>
  state.posts.selectedSubreddit;


export default postsSlice.reducer
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts)






