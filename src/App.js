import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

function App() {
  return(
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/logs" element={<Index/>}/>
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show/>}/>
            <Route path="/logs/:index/edit" element={<Edit/>}/>
          </Routes>
        </main>
        
      </Router>
    </div>
  )
}

export default App;
