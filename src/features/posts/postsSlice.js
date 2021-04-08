import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
  createSelector
} from "@reduxjs/toolkit";

const selectId = post => post.id;

const postsAdapter = createEntityAdapter({
  selectId
 
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
  selectedSubreddit: "/r/pics/",
  idsBySubreddit: {}
});

export const API_ROOT = "https://www.reddit.com";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json?limit=100`);
    const dataRow = await response.json();
    return dataRow.data.children.map((post) => post.data);
  },
  {
    condition: (subreddit, { getState }) => {
      const { posts } = getState();
      if (posts.idsBySubreddit[subreddit] !== undefined) {
        return false;
      }
    }
  }
);

export const fetchSinglePost = createAsyncThunk(
  "posts/fetchSingle",
  async (postId) => {
    const response = await fetch(
      `https://api.reddit.com/api/info/?id=t3_${postId}`
    );
    const json = await response.json();
    return json.data.children[0].data;
  },
  {
    condition: (postId, { getState }) => {
      const { posts } = getState();
      if (posts.entities[postId]) {
        return false;
      }
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
      state.idsBySubreddit[action.meta.arg] = [];
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      postsAdapter.upsertMany(state, action.payload);
      state.idsBySubreddit[action.meta.arg] = action.payload.map(selectId);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchSinglePost.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSinglePost.fulfilled]: (state, action) => {
      state.status = "succeeded";
      postsAdapter.upsertOne(state, action.payload);
    },
    [fetchSinglePost.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const { setSelectedSubreddit } = postsSlice.actions;

export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;

export const selectSelectedSubredditPostIds = (state) =>
  state.posts.idsBySubreddit[state.posts.selectedSubreddit] ?? [];

export default postsSlice.reducer;
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors((state) => state.posts);

export const selectCurrentSubredditPosts = createSelector(
  selectSelectedSubredditPostIds,
  (state) => state.posts.entities,
  (ids, posts) => ids.map((id) => posts[id])
);
