import Carousel from "./components/carousel"
import { countries } from "./components/data"
import "./App.css"

function App() {

  return (
    <div className="App">
      <div className="topContent">
        <h1>Carousel App</h1>
        <p>Places to Meet</p>
      </div>
      <Carousel countries={countries} />
    </div>
  )
}

export default App
