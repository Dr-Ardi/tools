import './App.css';
import Design from './Design';
import Uni from './Uni';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import content from './content.json'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/design" element={<Design content={content.design} />} />
        <Route path="/uni" element={<Uni content={content.uni} />} />
      </Routes>
    </Router>
  );
}

export default App;
