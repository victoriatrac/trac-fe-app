import './css/app.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Weather from './components/Weather'
import Tasks from './components/Tasks'
import Posts from './components/Posts'
import News from './components/News'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<>
          <Weather />
          <Tasks />
          <Posts />
          <News />
        </>} />
        <Route path='posts' element={<>
          <Posts />
        </>} />
      </Routes>

    </div>
  );
}

export default App;
