import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import userReducer from '../features/avatar/avatarSlice'
import subredditReducer from '../features/subreddits/subredditsSlice'
import commentsReducer from '../features/comments/commentsSlice'
import searchReducer from '../features/searchPosts/searchSlice'


export default configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
    subreddits: subredditReducer,
    comments: commentsReducer,
    search: searchReducer
    
  }
})
