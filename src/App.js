import './App.css'
import React from 'react'

import Weather from './components/Weather'
import Tasks from './components/Tasks'
import Posts from './components/Posts'
import Mock2 from './components/Mock2'

function App() {
  return (
    <div className="App">
      <Weather />
      <Tasks />
      <Posts />
      <Mock2 />
    </div>
  );
}

export default App;
