import axios from "axios";
import LogDetails from "./LogDetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
function LogEditForm() {
  const API = process.env.REACT_APP_API_URL;
  let { index } = useParams();
  let navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSincelastCrisis: "",
  });

  const [edit, setEdit] = useState(log);

  console.log(log);

  useEffect(() => {}, [index]);

  function handleTextChange(e) {
    setLog({ ...log, [e.target.id]: e.target.value });
  }

  function handleCheckBoxChange() {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  }

  function handleNewLog(e) {
    e.preventDefault();
    axios.post(`${API}/logs`, log).then(() => navigate(`/logs/${index}`));
    console.log(edit);
  }
  console.log(log);
  return (
    <div className="Edit">
      <header>Edit Captain's Log</header>
      <form onSubmit={handleNewLog}>
        <Form.Group className="mb-3" controlId="formCaptainName">
          <Form.Label>Captain's Name:</Form.Label>
          <Form.Control
            id="captainName"
            className="form-control"
            type="text"
            value={edit.captainName}
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label htmlFor="title">Title:</Form.Label>
        <Form.Control
          id="title"
          type="text"
          value={log.title}
          onChange={handleTextChange}
          required
        />
</Form.Group>

        <Form.Label>Post:</Form.Label>
        <textarea
          id="post"
          className="form-control"
          type="text"
          value={log.post}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckBoxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSincelastCrisis}
          onChange={handleTextChange}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
      <Link to={`/logs/${index}`}>
        <Button variant="dark">Back</Button>
      </Link>
    </div>
  );
}

export default LogEditForm;
