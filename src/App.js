import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {SubredditsList} from './features/subreddits/subredditList'
import {PostDetailRender} from './features/posts/singlePost'
import {SingleSearchPostRender} from './features/searchPosts/singleSearchPost'
import {PostsList } from './features/posts/PostsList'
import {SearchPostsList} from './features/searchPosts/searchPosts'
import {StartMessage} from './features/posts/startMessage'


function App() {
  return (

    <Router > 
      <div className="App">
      <div className="App-navbar">
        <SubredditsList />
      </div>
        <Switch>
          <Route  exact path="/" component={StartMessage}/>
          <Route  exact path="/search" component={SearchPostsList}/>
          <Route exact path="/posts" component={PostsList} />
          <Route  path="/posts/:postId" component={PostDetailRender}/>
          <Route  path="/search/:postId" component={SingleSearchPostRender}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App