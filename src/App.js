import './App.css';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import content from './content.json';
import Page from './Page';

function App() {
  return (
    <Router>
      <nav>
        <Link className='linux' to="/">Linux</Link>
        <Link className='uni' to="/uni">Uni</Link>
        <Link className='design' to="/design">Design</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Page content={content.linux} color="linux" />} />
        <Route path="/design" element={<Page content={content.design} color="design" />} />
        <Route path="/uni" element={<Page content={content.uni} color="uni" />} />
      </Routes>
    </Router>
  );
}

export default App;
