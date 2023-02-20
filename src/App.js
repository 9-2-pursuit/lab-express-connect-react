import Logs from "./components/Logs";
import NavBar from "./components/NavBar";
import Show from "./components/Show";
import New from "./components/New";
import Edit from "./components/Edit";
import Delete from "./components/Delete";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [logs, setLogs] = useState([]);
  console.log(logs);
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route
            path="/logs"
            element={<Logs setLogs={setLogs} logs={logs} />}
          ></Route>
          <Route path="/logs/:id" element={<Show logs={logs} />}></Route>
          <Route path="/logs/:id/edit" element={<Edit />}></Route>
          <Route path="/logs/:id/delete" element={<Delete />}></Route>
          <Route path="/logs/new" element={<New />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
