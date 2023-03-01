import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import IndexPage from "./Components/IndexPage"
import NewPage from "./Components/NewPage";
import EditPage from "./Components/EditPage";
import ShowPage from "./Components/ShowPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/logs" element={<IndexPage/>} />
        <Route path="/logs/:index" element={<ShowPage/>} />
        <Route path="/logs/new" element={<NewPage/>} />
        <Route path="/logs/:index/edit" element={<EditPage/>} />



      </Routes>
    </Router>
  )
}

export default App;
