import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogsIndex from "./components/LogsIndex";
import LogDetails from "./components/LogDetails";
import NewLogForm from "./components/NewLogForm";
import EditLogForm from "./components/EditLogForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<LogsIndex />} />
            <Route path="/logs/:index" element={<LogDetails />} />
            <Route path="/logs/new" element={<NewLogForm />} />
            <Route path="/logs/:index/edit" element={<EditLogForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;