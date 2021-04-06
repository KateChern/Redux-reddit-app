import React, { useState } from "react";
import {fetchSearch} from '../searchPosts/searchSlice'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';



export const Search = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
      setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(text && text.length >0){
        dispatch(fetchSearch(text));
        // setText('')
      }
    };
    return (
      <div>
          <form className="AddSearchForm" onSubmit={handleSubmit}>
            <Link className="postLink" to={`/search`}>
              <input
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleTextChange}
              />
            </Link>
                <input type="submit" value="Search" />
              
          </form>
        </div>
      );
    
}