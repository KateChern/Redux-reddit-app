import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {UserInfo} from '../avatar/avatar'
import {selectSearchPostById, fetchSingleSearchPost} from '../searchPosts/searchSlice'
import moment from 'moment';
import {FaRegComments} from 'react-icons/fa'
import {RiHeart3Line} from 'react-icons/ri'
import {getComments} from '../comments/commentsSlice'
import {RenderComments} from '../comments/comments'
import {GoUpButton} from '../goUpButton'
import ReactMarkdown from 'react-markdown';


export function SingleSearchPostRender({match}) {
    const { postId } = match.params
    const post = useSelector((state) => selectSearchPostById(state, postId))
    const dispatch = useDispatch()

    const onToggleComments =  (permalink) => { 
        const fetchComments = dispatch(getComments(permalink)) 
        return fetchComments;
      };

    useEffect(() => {
        dispatch(fetchSingleSearchPost(postId));
      }, [dispatch, postId]);
  
    if (!post) {
        return (
          <section>
            {/* <h2>Post not found!</h2> */}
          </section>
        )
      }
    if (post){
    return (
        <article  className="post-content" key={post.id}>
            <div className="postContent">
                <div className="userInfo">
                    <UserInfo postAuthor={post.author} />

                    <h5 id='home' className="userName"> by  {post.author}</h5>
                 </div>
                <hr ></hr> 
                <h4 className="post-title">{post.title}</h4>
                <p>{post.selftext?  <ReactMarkdown className='selfText' source={post.selftext} /> : ''}</p>
                <div className="post-media">
                   <img className="image" src={post.url} alt=""/>
                    {post.media ? <video className='video' src={post.media.reddit_video.fallback_url} controls > Your browser does not support the video tag. </video>: ''}
          
                 </div>
                 { post.domain=== 'clips.twitch.tv' || post.domain=== 'imgur.com' || post.post_hint=== 'link' ? <a className="postUrl" href={post.url}>Click here to see the post</a> : '' }
                <div className='postInfo'>
                <p className='info'>{moment.unix(post.created_utc).fromNow()}</p>
                <p className='info likes'><RiHeart3Line/> {post.ups}</p>
              
                <p className='info' onClick={()=> (onToggleComments(post.permalink))} > <FaRegComments/> {post.num_comments} </p>
            </div>
            <GoUpButton />
        <RenderComments post={post}/>
        
      </div>
     
    </article>)}
    
}




