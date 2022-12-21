import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
function App() {

  const API = process.env.REACT_APP_API_URL
  const [logs, setLogs] = useState([])

  useEffect(() => {
axios.get(`${API}/logs`)
.then((response) => {
  console.log(response)
})
  })




  return <div>Hello World</div>;
}

export default App;
