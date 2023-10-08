import React, { useState, useEffect } from "react";
import "./feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";

function Feed() {
  const [newPost, setPost] = useState([]);
  console.log(newPost);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Twitter</h2>
      </div>

      <Tweetbox setPost={setPost} />

      {newPost.map((posts, index) => {
        return <Post key={index} content={posts} />;
      })}
    </div>
  );
}

export default Feed;
