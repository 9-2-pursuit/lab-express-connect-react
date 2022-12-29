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
          <Form.Label>Title:</Form.Label>
          <Form.Control
            id="title"
            type="text"
            value={log.title}
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPost">
          <Form.Label>Post:</Form.Label>
          <Form.Control
            id="post"
            type="text"
            value={log.post}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMistakesWereMadeToday">
          <Form.Label>Mistakes were made today</Form.Label>
          <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={handleCheckBoxChange}
            checked={log.mistakesWereMadeToday}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDaysSicneLastCrisis">
          <Form.Label>Days Since Last Crisis:</Form.Label>
          <Form.Control
            id="daysSinceLastCrisis"
            type="number"
            value={log.daysSincelastCrisis}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      <Link to={`/logs/${index}`}>
        <Button variant="dark">Back</Button>
      </Link>
    </div>
  );
}

export default LogEditForm;
