import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";

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
    <div className="post">
      <div className="post_avatar">
        <Avatar scr="" />
      </div>
    </div>
  );
}

export default Post;
