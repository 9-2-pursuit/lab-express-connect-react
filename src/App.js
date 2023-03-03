// import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";


import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
// import "./App.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import "./App.css"
function App() {
  // const [transactions, settransactions] = useState([]);
  // const API = process.env.REACT_APP_API_URL;
  // useEffect(() => {
  //   axios
  //     .get(`${API}/transactions`)
  //     .then((response) => settransactions(response.data))
  //     .catch((e) => console.error("catch", e));
  // }, [API]);


  


  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/:index" element={<Show />} />
        <Route path="/logs/:index/edit" element={<Edit />} />
        <Route path="/logs/new" element={<New />} />
        {/* <Route path="*" element={<FourOFour />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
