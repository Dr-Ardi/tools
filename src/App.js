import './App.css';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import content from './content.json';
import Page from './Page';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Linux</Link>
        <Link to="/Uni">Uni</Link>
        <Link to="/design">Design</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Page content={content.linux} />} />
        <Route path="/design" element={<Page content={content.design} />} />
        <Route path="/uni" element={<Page content={content.uni} />} />
      </Routes>
    </Router>
  );
}

export default App;
