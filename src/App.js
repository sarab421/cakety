
import './App.css';
import Home from './Home';
import MakeYourCake from './pages/MakeYourCake';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeYourCake" element={<MakeYourCake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
