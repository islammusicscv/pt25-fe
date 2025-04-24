import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Genre from "./pages/Genre.tsx";
import Movie from "./pages/Movie.tsx";

function App() {

  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genres" element={<Genre />} />
              <Route path="/movies" element={<Movie />} />
          </Routes>
      </>
  )
}

export default App
