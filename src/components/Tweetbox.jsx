import React from 'react'
import "./tweetbox.css"
import { Avatar } from "@mui/material";

function Tweetbox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetbox_input'>
                <Avatar src=""/>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>

            </div>
            <div className='tweetbox_bottom'>
            <input type='file' className='input_btn' accept="image/*" onchange="loadFile(event)"/>
            <button className='tweetbox_input_button'>TWEET</button>
            </div>
        </form>
        </div>
  )
}

export default Tweetbox