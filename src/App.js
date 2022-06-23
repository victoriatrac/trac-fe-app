import './App.css'
import React from 'react'

import Weather from './components/Weather'
import Tasks from './components/Tasks'
import Posts from './components/Posts'
import News from './components/News'

function App() {
  return (
    <div class="App">
      <Weather />
      <Tasks />
      <Posts />
      <News />
    </div>
  );
}

export default App;
