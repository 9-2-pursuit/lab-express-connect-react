import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogsIndex from "./Components/LogsIndex";
import LogDetails from "./Components/LogDetails";
import NewLogForm from "./Components/NewLogForm";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LogsIndex />} />
          <Route path="/logs" element={<LogsIndex />} />
          <Route path="/logs/:index" element={<LogDetails />} />
          <Route path="/logs/new" element={<NewLogForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
