import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404 from "./errors/Error404";
import Navbar from "./commons/Navbar";

const App = () => {
  return(
    <Router>
      <div data-testid="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
