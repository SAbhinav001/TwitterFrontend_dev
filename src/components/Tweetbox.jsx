import React from 'react'
import "./tweetbox.css"
import { Avatar } from "@mui/material";

function Tweetbox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetbox_input'>
                <Avatar src=""/>
                <input type='text' placeholder="What's happening"f/>

            </div>
            <button className='tweetbox_input_button'>TWEET</button>
        </form>
        </div>
  )
}

export default Tweetbox