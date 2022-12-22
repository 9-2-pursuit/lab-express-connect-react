import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import Log from "./pages/Log";
import NewLog from "./pages/NewLogs";
import EditLog from "./pages/EditLog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/:index" element={<Log />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index/edit" element={<EditLog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
