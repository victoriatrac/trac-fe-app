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
    <div className="container-tile" >
      <div id="posts-container">
        <ul className="posts">
            {posts.map((post) => (
                <li className="post">
                  <h3>{post.fact}</h3>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Posts