import React  from 'react'
import { useSelector} from 'react-redux'
import { selectCommentsById, selectCommentsds} from '../comments/commentsSlice'
import Skeleton from 'react-loading-skeleton';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import {RiHeart3Line} from 'react-icons/ri'
import 'github-markdown-css'
import {GoUpButton} from '../goUpButton'


const CommentContent = ({commentId}) => {
  const comment = useSelector((state) => selectCommentsById(state, commentId))
  return (
    <div className="comment" key={commentId} >
          <div>
            <hr></hr>
              <p className="comment-author">{comment.author}</p>
              <ReactMarkdown className='commentText' source={comment.body} />
            <div className='commentInfo'>
                <p className='infoCom'>{moment.unix(comment.created_utc).fromNow()}</p>
                <p className='infoCom likes'><RiHeart3Line/> {comment.ups}</p>
            </div>
      </div>
      <div className='subCommentInfo' >{comment.replies? comment.replies.data.children.map(com => (
          <div> 
              <p className="comment-author">{com.data.author}</p>
                <div className='markdown-body'> 
                  <ReactMarkdown className='commentText' source={com.data.body} />
                </div>
              <div className='commentInfo'>
                  <p className="infoCom">{moment.unix(com.data.created_utc).fromNow()}</p>
                  <div className='infoCom likes'> <RiHeart3Line/> {com.data.ups} </div> 
              </div>
          </div>   )) : '' }
      </div>
    </div>)
  }

export const RenderComments = () => {
  const commentStatus = useSelector(state => state.comments.commentStatus)
  const errorCom = useSelector((state) => state.comments.userError)
  const commentsIds = useSelector(selectCommentsds)
  
  let text
   
   if (commentStatus === 'loading') {
    text = 
     (<div> <Skeleton variant="circle" width={45} height={45} />
       <Skeleton variant="circle" width={45} height={45} />
       <Skeleton variant="circle" width={45} height={45} />
       <Skeleton variant="circle" width={45} height={45} />
         </div>)
   } 
   else if ( commentsIds){
     text =  commentsIds.map((commentId) => (
        
        <CommentContent key={commentId} commentId = {commentId} /> 
       ))      
}  else if (commentStatus === 'failed'){
     text= <div>{errorCom}</div>
     }
   return ( 
            <div>
              {text}
             
          </div>
          
           )
   }