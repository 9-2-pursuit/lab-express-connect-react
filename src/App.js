//DEPENDENCES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit"

//COMPONENTS
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
