//DEPENDENCES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Index from "./Pages/Index";
import Home from "./Pages/Home";

//COMPONENTS
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
  <Router>
  <Nav />
    <main>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/logs" element={ <Index/> } /> 
      </Routes>
    </main>
  </Router>
  </div>
  )
}

export default App;
