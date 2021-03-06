import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/news.css'
import '../css/components.css'
import Pagination from './Pagination'

/* Article component for displaying news data */
function Article(props) {

  /* real article container for real data */
  // const { title, description, source_id, image_url } = props.data;
  // return (
  //   <div className="news-article-container">
  //     <div className="news-article-header">
  //       <h1>{title}</h1>
  //     </div>
  //     <div className="news-article-info">
  //       <p className={image_url ? "news-article-container-p" : "news-article-container-p-missing-image"}>{description}</p>
  //       {image_url ? <img src={image_url} alt={source_id} height="150px" width="150px"/> : <></>}
  //     </div>
  //   </div>
  // );

  /* faux article container for faux data */
  const { title, body } = props.data;
  return (
    <div className="news-article-container">
      <div className="news-article-header">
        <h1>
          {title}
        </h1>
      </div>
      <div className="news-article-info">
        <p>
          {body}
        </p>
        <img src="https://picsum.photos/150" alt="random"/>
      </div>
    </div>
  );

}

function News() {
  const [ news, setNews ] = useState([])
  const [ error, setError ] = useState("")

  // const key = "pub_8600653f1182d8379155ec357665f2ade19e"

  /* Axios call for news data */
  useEffect(() => {
    axios
      // .get(`https://newsdata.io/api/1/news?apikey=${key}&country=us&language=en`)
      // .then((res) => setNews(res.data.results))
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setNews(res.data))
      .catch((error) => setError(error.message))
  }, [])

  /* If there's an error from the axios call, display it */
  if (error) return <h3>{error}</h3>

  return (
    <div className="tile-container">
      <div id="news-container">
        <p>
          If you're seeing this, this is the fake data that I'm using as the real news API I'm calling has a limited number of calls.
        </p>

        {/* if no articles exist, show "No news to display". Otherwise, display the pagination component and pass the news data, render component, and other parameters through. */}
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