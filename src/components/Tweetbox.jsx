import React from 'react'
import "./tweetbox.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Tweetbox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetbox_input'>
                <AccountCircleIcon/>
                <input type='text' placeholder="What's happening"f/>

            </div>
            <button className='tweetbox_input_button'>TWEET</button>
        </form>
        </div>
  )
}

export default Tweetbox