import React, { useEffect, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {UserInfo} from '../avatar/avatar'
import { fetchPosts, 
  selectSelectedSubredditPostIds,
  selectPostById}  from './postsSlice'
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import {FaRegComments} from 'react-icons/fa'
import {RiHeart3Line} from 'react-icons/ri'
import {getComments} from '../comments/commentsSlice'
import {GoUpButton} from '../goUpButton'
import { Link } from 'react-router-dom';
import SkeletonCard from '../loadingForms/loading'



export let PostContent = ({postId}) => {
  const dispatch = useDispatch()
  const post = useSelector((state) => selectPostById(state, postId))

  const onToggleComments =  (permalink) => { 
    const fetchComments = dispatch(getComments(permalink)) 
    return fetchComments;
  };
  const [readMore, setReadMore]=useState(false);

  const linkName= readMore?'Read Less << ':'Read More >> '

  let postText
  if(post.selftext && post.selftext.length >200 && !readMore) {
  postText = <div><ReactMarkdown className='selfText' source={post.selftext.substring(0, 200) + '  ...'} /></div>
  } else if(post.selftext && readMore) {
  postText = <ReactMarkdown className='selfText' source={post.selftext} />
}

  if (post) {
  return (
    <article  className="post-content" key={post.id}>
      <div className="postContent">
      <Link className="postLink" to={`/posts/${post.id}`}  onClick={()=> (onToggleComments(post.permalink))}  >
        <div className="userInfo">
          {post.author !== '[deleted]' ? <UserInfo postAuthor={post.author} /> : <UserInfo postAuthor={'AutoModerator'} /> }
          <h5 id='home' className="userName"> by  {post.author}</h5>
        </div>
        <hr ></hr> 
          <h4 className="post-title">{post.title}</h4>
          <div className="post-media">
            <img className="post-image" src={post.url} alt=""/>
            <div>{post.media &&  post.media.reddit_video ? <video className='video' src={post.media.reddit_video.fallback_url} controls > Your browser does not support the video tag. </video>: ''}</div>
           </div>
          {postText}
         
          </Link>
         
          { post.domain=== 'clips.twitch.tv' || post.domain=== 'imgur.com'|| post.post_hint=== 'link' ? <a className="postUrl" href={post.url}>Click here to see the post </a> : '' }
        
        <p className='readmore' onClick={()=>{setReadMore(!readMore)}}>{post.selftext && linkName}</p>
          
        <div className='postInfo'>
            <p className='info'>{moment.unix(post.created_utc).fromNow()}</p>
            <p className='info likes'><RiHeart3Line/> {post.ups}</p>
            <Link className="postLink" to={`/posts/${post.id}`} >
            <p className='info' onClick={()=> (onToggleComments(post.permalink))} > <FaRegComments/> {post.num_comments} </p>
            </Link>
            <GoUpButton />
        </div>
      </div>
     
    </article>
  )
}}
 
export const PostsList = () => {
  const dispatch = useDispatch()
  const postStatus = useSelector(state => state.posts.status)
  const orderedPostIds = useSelector(selectSelectedSubredditPostIds)
  const error = useSelector((state) => state.posts.error)
  const selectedSubreddit = useSelector(state => state.posts.selectedSubreddit)

  useEffect(()=> {
    
      dispatch(fetchPosts(selectedSubreddit))
  }, [selectedSubreddit, dispatch]);

    let content 

    if (postStatus=== 'loading') {
      content =
     
       <SkeletonCard />
    
    } else if(postStatus === 'succeeded' && orderedPostIds){
      content = orderedPostIds.map((postId)=> 
    ( <PostContent postId = {postId} key={postId} />
    ))
    } else if(postStatus === 'failed'){
      content = <div>{error}</div>
    }
    return (
      <section>
        <h2 className='subredditTitle'>{selectedSubreddit}</h2>
        {content}
       
      </section>
    ) 
  }
  

