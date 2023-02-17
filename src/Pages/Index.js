import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const API = "http://localhost:8000/";

export default function IndexPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}logs`)
      .then((res) => setLogs(res))
      .catch((error) => console.error("catch", error));
  }, []);

  console.log(logs.data[0]);

  return (
    <div>

      IndexPage
      {/* {logs.data.map((log) => {
        return (
          <a href="./components/ViewPage.js">
            {log.title} <br />
          </a>
        );
      })} */}
    </div>
  );
}
