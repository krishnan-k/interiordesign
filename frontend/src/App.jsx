import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/list" element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
