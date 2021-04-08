
import { createAsyncThunk, createSlice,  createEntityAdapter,  createSelector } from '@reduxjs/toolkit';

const selectId = post => post.id;

const searchAdapter = createEntityAdapter(
  { selectId}
);

const initialState = searchAdapter.getInitialState({
    status: 'idle',
    error: null,
    idsByInput: {},
    searchInput: ''
  });
  
  export const API_ROOT = 'https://www.reddit.com';
  
  export const fetchSearch = createAsyncThunk('search/fetchSearch', 
    async(searchInput) => {
    const response = await fetch(`${API_ROOT}/search.json?q=${searchInput}`)
    const dataRow = await response.json()
    return dataRow.data.children.map((post) => post.data)
  },
  {
    condition: (searchInput, { getState }) => {
      const { search } = getState();
      if (search.idsByInput[searchInput] !== undefined) {
        return false;
      }
    }
  }
  );

export const fetchSingleSearchPost = createAsyncThunk(
  "search/fetchSinglePost",
  async (postId) => {
    const response = await fetch(
      `https://api.reddit.com/api/info/?id=t3_${postId}`
    );
    const json = await response.json();
    return json.data.children[0].data;
  },
  {
    condition: (postId, { getState }) => {
      const { search } = getState();
      if (search.entities[postId]) {
        return false;
      }
    }
  }
);

  
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchSearch.pending]: (state, action) => {
        state.status = 'loading'
        state.idsByInput[action.meta.arg] = [];
      },
      [fetchSearch.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        searchAdapter.upsertMany(state, action.payload);
        state.idsByInput[action.meta.arg] = action.payload.map(selectId);
      },
      [fetchSearch.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      },
      [fetchSingleSearchPost.pending]: (state, action) => {
        state.status = "loading";
      },
      [fetchSingleSearchPost.fulfilled]: (state, action) => {
        state.status = "succeeded";
        searchAdapter.upsertOne(state, action.payload);
      },
      [fetchSingleSearchPost.rejected]: (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }
      
    }
  })

  
export default searchSlice.reducer
export const {
    selectAll: selectAllSearchPosts,
    selectById: selectSearchPostById,
    selectIds: selectSearchPostIds,
  } = searchAdapter.getSelectors((state) => state.search)
  
  
export const selectSelectedSearchPostIds = (state) =>
  state.search.idsByInput[state.search.searchInput] ?? [];


export const selectCurrentSearchPosts = createSelector(
  selectSelectedSearchPostIds,
  (state) => state.search.entities,
  (ids, posts) => ids.map((id) => posts[id])
);
