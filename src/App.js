import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import NavBar from "./NavBar";
import LogsTitles from "./LogsTitles";
import ShowOneLog from "./ShowOneLog";
import EditLog from "./EditLog";
import NewLog from "./NewLog"
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogsTitles />} />
          <Route path="/logs/:index" element={<ShowOneLog />} />
          <Route path="/logs/:index/edit" element={<EditLog />} />
          <Route path="/logs/new" element ={<NewLog/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
