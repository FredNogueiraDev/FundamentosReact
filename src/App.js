import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";

const category = "Categoria fundamentos do React";

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), likes: 10, title: "Título da notícia #01", subtitle: "Subtítulo da notícia #01", read: false },
    { id: Math.random(), likes: 50, title: "Título da notícia #02", subtitle: "Subtítulo da notícia #02", read: true },
    { id: Math.random(), likes: 20, title: "Título da notícia #03", subtitle: "Subtítulo da notícia #03", read: false }
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          likes: 25,
          title: `Título da notícia #${prevState.length + 1}`,
          subtitle: `Subtítulo da notícia #${prevState.length + 1}`,
          read: false
        }
      ]);
    }, 2000);
  }

  function handleRemovePost(postId) {
    console.log('Remover post', postId);
    setPosts((prevState) =>
      prevState.filter(post => post.id !== postId)
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>Header children</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <h5>{category}</h5>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;