import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Display } from "./Display";
import { Home } from "./Home";
import { Reader } from "./Reader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
        <Route path="/reader" element={<Reader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
