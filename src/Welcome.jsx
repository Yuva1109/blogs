import React from "react";
import "./App.css";

function Welcome({ goToCreate, goToBlogs }) {
  return (
    <div className="welcome">
      <h1>Welcome to PostNet</h1>
      <div className="buttons">
        <button onClick={goToBlogs}>View Blogs</button>
        <button onClick={goToCreate}>Create New Post</button>
      </div>
    </div>
  );
}

export default Welcome;
