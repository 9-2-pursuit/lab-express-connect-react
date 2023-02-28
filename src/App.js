import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route exact path="/logs/:id" element={<Show />} />
            <Route path="/logs/:id/edit" element={<Edit />} />
          </Routes>
    </Router>
  );
}

export default App;
