import './App.css';
import Design from './Design';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import content from './content.json'
import useFavicon from "./UseFavicon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/design" element={<Design content={content.design} />} />
      </Routes>
    </Router>
  );
}

export default App;
