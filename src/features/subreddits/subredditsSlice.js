import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const postsAdapter = createEntityAdapter(
  {
    // selectId: (post => post.id)
  }
)


const initialState = postsAdapter.getInitialState({
  
  subreddits: [],
    error: null,
    status: 'idle',
})

export const API_ROOT = 'https://www.reddit.com';

export const getSubreddits = createAsyncThunk('posts/fetchSubreddits', async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json?limit=40`);
    const json = await response.json();
  
    return json.data.children.map((subreddit) => subreddit.data);
  });


const subredditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {},
    extraReducers: {
      [getSubreddits.pending]: (state, action) => {
        state.status = 'loading'
      },
      [getSubreddits.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        postsAdapter.setAll(state, action.payload)
      },
      [getSubreddits.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      },
    }
})


export default subredditSlice.reducer;

export const {
  selectAll: selectSubreddits,
  selectById: selectSubredditById
} = postsAdapter.getSelectors((state) => state.subreddits)