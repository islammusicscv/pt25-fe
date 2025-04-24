import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Genre from "./pages/Genre.tsx";

function App() {

  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genres" element={<Genre />} />
          </Routes>
      </>
  )
}

export default App
