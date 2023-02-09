import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Button, ButtonGroup } from "react-bootstrap";

export default function LogForm({ API }) {
  let { id } = useParams();
  let navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${API}/logs/${id}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.error("catch", e));
  }, [id, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      axios
        .post(`${API}/logs`, log)
        .then((response) => {
          navigate(`/logs`);
        })
        .catch((error) => console.error("catch", error));
    } else {
      axios
        .put(`${API}/logs/${id}`, log)
        .then((response) => {
          console.log(response.data);
          setLog(response.data);
          navigate(`/logs/${id}`);
        })
        .catch((error) => console.error("catch", error));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="captainName">
        <Form.Label>Captain Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the captain's name"
          value={log.captainName}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the title of the log"
          value={log.title}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="post">
        <Form.Label>Post</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the content of the captain's log"
          value={log.post}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="daysSinceLastCrisis">
        <Form.Label>Days Since Last Crisis</Form.Label>
        <Form.Control
          type="number"
          label=""
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="mistakesWereMade">
        <Form.Check
          type="checkbox"
          label="Were mistakes made?"
          checked={log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
        />
      </Form.Group>

      <ButtonGroup aria-label="Basic example">
        <Link to={`/logs/${id}`}>
          <Button variant="dark">Back</Button>
        </Link>
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
}
