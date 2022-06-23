import React from "react"
import axios from "axios"

import './components.css'
import './posts.css'

function Posts() {
  const [ posts, setPosts ] = React.useState([])

  React.useEffect(() => {
    axios
      .get("https://catfact.ninja/facts")
      .then((res) => setPosts(res.data.data))
  }, [])

  return (
    <div class="tile-container" >
      <div id="posts-container">
        <ul class="posts">
            {posts.map((post) => (
                <li class="post">
                  <h3>{post.fact}</h3>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Posts