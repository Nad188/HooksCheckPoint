import "./App.css";
import { MoviesData } from "./Components/MoviesData";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home MoviesData={MoviesData} />
    </div>
  );
}

export default App;
