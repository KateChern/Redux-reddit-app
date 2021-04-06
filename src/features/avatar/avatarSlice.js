import { createAsyncThunk, createSlice,  createEntityAdapter, createSelector } from '@reduxjs/toolkit'


const usersAdapter = createEntityAdapter(
  {
     selectId: (users => users.name)

  }
)


const initialState = usersAdapter.getInitialState({
  users: [],
  userStatus: 'idle',
  userError: null
})

export const API_ROOT = 'https://www.reddit.com';


export const controlFetching = createAsyncThunk('users/fetchUsers', async(author) => {

    const userData = await fetch(`${API_ROOT}/user/${author}/about.json`).then(response1 => response1.json())
    return userData.data
 
  
})


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: {
    [controlFetching.pending]: (state, action) => {
      state.userStatus = 'loading'
    },
    [controlFetching.fulfilled]: (state, action) => {
      state.userStatus = 'succeeded'
      usersAdapter.upsertOne( state, action.payload)
     
    },
    [controlFetching.rejected]: (state, action) => {
      state.userStatus = 'failed'
      state.userError = action.error.message
    }
  }
})

// export const {setSelectedSubreddit} = postsSlice.actions

// export const users = (state) =>
//   state.users.users;


export default userSlice.reducer

export const {
  selectAll: selectAllUsers,
  selectById: selectUsersById,
  selectIds: selectUsersIds,
} = usersAdapter.getSelectors((state) => state.users)


export const selectUserByPost = createSelector(
  [selectAllUsers, (state, postId) => postId],
  (users, postId) => users.filter((user) => user.post === postId)
)









