import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import reddit  from '../subreddits/reddit.png'
import { Link } from 'react-router-dom';

import {getSubreddits, selectSubreddits, selectSubredditById} from './subredditsSlice'
import { setSelectedSubreddit} from '../posts/postsSlice'
import {Search} from '../searchPosts/search'

let RenderSubreddits = ({subredditId})=>{
    const subreddit = useSelector((state) => selectSubredditById(state, subredditId))
    const dispatch = useDispatch()
    return (  
            <div className='dropdown-button' key = {subredditId}>
                <Link className="postLink" to={`/posts`} >
                <button type="button" onClick={()=> (dispatch(setSelectedSubreddit(subreddit.url)) )}>
                    <img className='subreddit-icon'
                                src={subreddit.icon_img ?  subreddit.icon_img :
                                    subreddit.header_img || reddit}
                                alt={`${subreddit.display_name}`} />
                    <p className='subreddit-name'>{subreddit.display_name}</p>
                </button>
                </Link>
            </div>)
}

export const SubredditsList = () => {

    const dispatch = useDispatch()
    const subreddits = useSelector(selectSubreddits)
    const postStatus = useSelector(state => state.subreddits.status)
    const error = useSelector((state)=> state.subreddits.error)

    useEffect(() => {
    if (postStatus=== 'idle')
        dispatch(getSubreddits());
    }, [postStatus,dispatch])
    
    let subredditsList 
    
    if (postStatus=== 'loading') {
        subredditsList = <div className="dropdown-content">Loading...</div>
    } 
    else if(postStatus === 'succeeded'){     
    subredditsList = <div className="dropdown-content">{subreddits.map((subreddit)=> 
    
    ( <RenderSubreddits  subredditId = {subreddit.id} key={subreddit.id}/>
    ))}</div>
    
    } else if(postStatus === 'failed'){
    subredditsList = <div>{error}</div>
    }
    return (
        <div className="navbar">
            <div className="dropdown">
                <button className="dropbtn">Subreddits
                     <i className="fa fa-caret-down"></i>
                </button>
                {subredditsList}
            </div>
            <div className="dropdown">
                <Search /> 
           </div>
        </div>
    )
}


