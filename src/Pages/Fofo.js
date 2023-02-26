import React from "react";
import { useNavigate } from "react-router-dom";

export default function fofo() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Error</h1>
      <h2>Sorry bruh</h2>
      <img src="https://i.kym-cdn.com/photos/images/original/001/582/621/e79.jpg" alt="404"
        height="600"
        width="600" />
      <button onClick={() => navigate("/logs")}>Back to Logs Playa</button>
    </div>
  )
}
