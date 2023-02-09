// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import LogDetails from "./Components/LogDetails";
import LogForm from "./Components/LogForm";
import Logs from "./Components/Logs";

// 404
import FourOFour from "./Pages/FourOFour";

function App() {
  const { REACT_APP_API_URL: API } = process.env;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs API={API} />} />
            <Route path="/logs/new" element={<LogForm API={API} />} />
            <Route exact path="/logs/:id" element={<LogDetails />} />
            <Route path="/logs/:id/edit" element={<LogForm API={API} />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
