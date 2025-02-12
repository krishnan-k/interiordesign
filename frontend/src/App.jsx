import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ProjectList from "./pages/ProjectList";
import Footer from "./components/Footer";
import Grid from "./pages/Grid";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/list" element={<ProjectList />} />
          <Route path="/grid" element={<Grid />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
