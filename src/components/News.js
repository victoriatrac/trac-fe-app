import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './news.css'
import './components.css'
import Pagination from './Pagination'

function Article(props) {
  // const { title, description, source_id, image_url } = props.data;
  // return (
  //   <div class="news-article-container">
  //     <div class="news-article-header">
  //       <h1>{title}</h1>
  //     </div>
  //     <div class="news-article-info">
  //       <p>{description}</p>
  //       <img src={image_url} alt={source_id} height="150px" width="150px"/>
  //     </div>
  //   </div>
  // );

  const { title, body } = props.data;
  return (
    <div class="news-article-container">
      <div class="news-article-header">
        <h1>{title}</h1>
      </div>
      <div class="news-article-info">
        <p>{body}</p>
        <img src="https://picsum.photos/150" alt="random image"/>
      </div>
    </div>
  );
}

function News() {
  const [ news, setNews ] = useState([])
  const [ error, setError ] = useState("")

  const key = "pub_8600653f1182d8379155ec357665f2ade19e"

 useEffect(() => {
    axios
      // .get(`https://newsdata.io/api/1/news?apikey=${key}&country=us&language=en`)
      // .then((res) => setNews(res.data.results))
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setNews(res.data))
      .catch((error) => setError(error.message))
  }, [])

  if (error) return <h3>{error}</h3>

  return (
    <div class="container-tile">
      <div id="news-container">

        {news.length > 0 ? (
          <>
            <Pagination
              data={news}
              RenderComponent={Article}
              pageLimit={5}
              dataLimit={10}
            />
          </>
          ) : (
            <h1>No news to display</h1>
        )}

      </div>
    </div>
  )
}

export default News