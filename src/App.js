import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index.js";
import Landing from "./Pages/Landing";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";

//COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
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
