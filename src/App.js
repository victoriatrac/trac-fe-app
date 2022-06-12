// import logo from "./logo.svg"
// import Posts from "./components/Posts"
import Weather from "./components/Weather"
import "./App.css"

console.log(process.env.REACT_APP_WEATHER_API_KEY)

function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Victoria's App of Apps</h1>
      </header>
      {/* <Posts /> */}
      <Weather />

    </div>
  );
}

export default App;
