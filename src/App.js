import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import SourceMap from "./pages/SourceMap";
import Support from "./pages/Support";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sourceMap" element={<SourceMap />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
