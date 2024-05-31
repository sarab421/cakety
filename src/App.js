
import './App.css';
import Home from './Home';
import MakeYourCake from './pages/MakeYourCake';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flavour from './pages/components/Flavour';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeYourCake" element={<MakeYourCake />} />
        <Route path="/flavour" element={<Flavour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
