import React from 'react'
import './tasks.css'

function Article(props) {
  const { title, body } = props
  
  return (
    <div className="task-div">
      <h3>{title}</h3>
      <p>{body}</p>
      <img src="https://nypost.com/wp-content/uploads/sites/2/2022/06/Times-Square-Crash-Trial.jpg?quality=90&strip=all" height="100px" width="100px"/>
    </div>
  )
}

export default Article