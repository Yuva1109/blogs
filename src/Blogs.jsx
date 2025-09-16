import React from "react";
import "./App.css";
function Blogs({ posts, onBack }) {
  return (
    <div className="page">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default Blogs;
