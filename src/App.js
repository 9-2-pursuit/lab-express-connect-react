import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Welcome from "./components/welcome-page";
import Index from "./components/index-page";
import Show from "./components/show-page";
import NewLogPage from "./components/new-log-page";
import EditLogPage from "./components/edit-log-page";
import NotFound from "./components/404-page";
import MsgBoard from "./components/messageBoard";
import * as src from "./fetch_";

function App() {
  /////////////////////////////////
  const [ msg, setMsg ] = useState([]);
  /////////////////////////////////
  src.setMsgEntry((title,body)=>{

    setMsg(pv=>{return [...pv,{title,body}]});
  })
  return (
    
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
     
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/logs" element={<Index/>} />
          <Route path="/logs/new" element={<NewLogPage/>} />
          <Route path="/logs/:idx/edit" element={<EditLogPage/>} />
          <Route path="/logs/:idx" element={<Show/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <MsgBoard msg={msg} setMsg={setMsg}/>
      </Router>
    </div>
  );
}

export default App;
