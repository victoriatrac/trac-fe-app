import React from "react"
import axios from "axios"

function Posts() {
    const [ posts, setPosts ] = React.useState([])

    React.useEffect(() => {
        axios
            .get("https://catfact.ninja/facts")
            .then((res) => setPosts(res.data.data))
    }, [])

    return (
        <ul className="posts">
            {posts.map((post) => (
                <li className="post">
                    <h3>{post.fact}</h3>
                </li>
            ))}
        </ul>
    )
}

export default Posts