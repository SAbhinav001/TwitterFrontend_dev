import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import { VerifiedUserRounded } from "@mui/icons-material";
import {
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@mui/icons-material";

function Post({
  displayName,
  userName,
  verified,
  text,
  image,
  avatar,
  timestamps,
}) {
  return (
    <div className="post" >
        <div className="post__avatar">
          <Avatar src="" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {/* {displayName}{" "} */}
                abhinav
                <span className="post__headerSpecial">
                  {/* {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username} */}
                  <VerifiedUserRounded className="post__badge" />
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quisquam?</p>
            </div>
          </div>
        <img src="https://plus.unsplash.com/premium_photo-1686507726547-28469a05a54f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
