import React, { useState } from "react";
import Welcome from "./Welcome";
import Create from "./Create";
import Blogs from "./Blogs";
import "./App.css";

function App() {
  const [page, setPage] = useState("welcome");
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    setPosts([...posts, { title, content }]);
    setPage("blogs"); 
  };

  return (
    <div>
      {page === "welcome" && <Welcome goToCreate={() => setPage("create")} goToBlogs={() => setPage("blogs")} />}
      {page === "create" && <Create onSave={addPost} onBack={() => setPage("welcome")} />}
      {page === "blogs" && <Blogs posts={posts} onBack={() => setPage("welcome")} />}
    </div>
  );
}

export default App;
