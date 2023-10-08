import React, { useState, useEffect } from "react";
import "./tweetbox.css";
import { Avatar } from "@mui/material";
import axios from "axios";

function Tweetbox({ setPost }) {
  //for creating new post
  const [text, setText] = useState("");

  async function postTweet(event) {
    event.preventDefault();
    console.log("clicked");
    if (text) {
      const { data } = await axios.post("http://localhost:3019/api/v1/tweets", {
        content: text,
      });
      console.log("post tweet", data?.data);
      setPost([data?.data]);
      setText("");
    }
  }
  return (
    <div className="tweetBox">
      <form onSubmit={postTweet}>
        <div className="tweetbox_input">
          <Avatar src="" />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="write here"
          />
        </div>
        <div className="tweetbox_bottom">
          <input type="file" className="input_btn" />
          <button type="submit" className="tweetbox_input_button">
            TWEET
          </button>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;
