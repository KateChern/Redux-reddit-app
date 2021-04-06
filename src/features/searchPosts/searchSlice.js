
import { createAsyncThunk, createSlice,  createEntityAdapter } from '@reduxjs/toolkit'

const searchAdapter = createEntityAdapter(
  { 
    selectId: (posts => posts.id), 
  }
)
const initialState = searchAdapter.getInitialState({
    status: 'idle',
    error: null,
    searchInput: '',
  })
  
  export const API_ROOT = 'https://www.reddit.com';
  
  export const fetchSearch = createAsyncThunk('search/fetchSearch', async(searchInput) => {
    const response = await fetch(`${API_ROOT}/search.json?q=${searchInput}`)
    const dataRow = await response.json()
    return dataRow.data.children.map((post) => post.data)
  })
  
  
  
  const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      setSearchInput(state, action) {
        state.searchInput = action.payload;
      }
    },
    extraReducers: {
      [fetchSearch.pending]: (state, action) => {
        state.status = 'loading'
      },
      [fetchSearch.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        searchAdapter.setAll(state, action.payload)
        
      },
      [fetchSearch.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      },
      
    }
  })
  
  // export const {setSearchInput} = searchSlice.actions
  
  export const setSearchInput = (state) =>
    state.search.searchInput;
  
  
  export default searchSlice.reducer
  export const {
    selectAll: selectAllSearchPosts,
    selectById: selectSearchPostById,
    selectIds: selectSearchPostIds,
  } = searchAdapter.getSelectors((state) => state.search)
  
  
  
  