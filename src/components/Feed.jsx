import React from 'react'
import "./feed.css"
import Tweetbox from './Tweetbox'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        
        <div className='feed_header'>
            <h2>Twitter</h2>
        </div>

        <Tweetbox/>

        <Post/>
        <Post/>
        <Post/>
        <Post/>
        

        
    </div>
  )
}

export default Feed