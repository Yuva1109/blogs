import React, { useState } from "react";
import "./App.css";
  
function Create({ onSave, onBack }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title && content) {
      onSave(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="page">
      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}

export default Create;
