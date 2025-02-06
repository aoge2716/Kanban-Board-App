import Home from "./component/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* ...  */}

      <Routes>
        <Route path="/Home" element={<Home />} />

      </Routes>

      {/* ...  */}
      <Home />
    </>
  );
}

export default App;
