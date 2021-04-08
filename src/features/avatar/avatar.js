import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {controlFetching, selectUsersById} from './avatarSlice'
import avatar from './reddit.png'
import Skeleton from 'react-loading-skeleton';


export const UserInfo = ({postAuthor}) => {
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.users.userStatus)
  const error = useSelector((state) => state.users.userError)
  const user = useSelector((state) => selectUsersById(state, postAuthor))

useEffect(()=> {
  
  dispatch(controlFetching(postAuthor)) }
, [postAuthor, dispatch]);
 
  let userContent 

  if (userStatus === 'loading') {
      userContent = <div> <Skeleton variant="circle" width={45} height={45} />
      </div>
  } else if (userStatus === 'succeeded' && user){
      userContent = 
      <img 
         src={`${user.snoovatar_img && user.snoovatar_img.length !==0 ? user.snoovatar_img : avatar }`}
         alt='avatar'
         className="avatar-profile-image"  />
   
    } else if (userStatus === 'failed'){
        userContent = <div>{error}</div>
    }
    return (
      <section>
        {userContent}
      </section>
    ) 
  }
  
