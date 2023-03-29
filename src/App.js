import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
// import Population from "./pages/Population";
import SourceMap from "./pages/SourceMap";
import Support from "./pages/Support";
// import Education from "./pages/Education";
// import Agriculture from "./pages/Agriculture";
// import EconomicDevelopment from "./pages/EconomicDevelopment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sourceMap" element={<SourceMap />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      {/* <Routes>
        <Route path="/population" element={<Population />} />
        <Route path="/population" element={<Education />} />
        <Route path="/population" element={<Agriculture />} />
        <Route path="/population" element={<EconomicDevelopment />} />
      </Routes> */}
    </>
  );
}

export default App;
