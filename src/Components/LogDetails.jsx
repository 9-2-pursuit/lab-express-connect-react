import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ListGroup, Button, ButtonGroup, Modal } from "react-bootstrap";
// import Reviews from "./Reviews";

export default function LogDetails() {
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [log, setLog] = useState([]);
  const [show, setShow] = useState(false);
  let { id } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${id}`)
      .then(
        () => {
          navigate(`/logs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${id}`)
      .then((response) => {
        console.log(response.data);
        setLog(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id, API]);

  return (
    <article>
      <ListGroup className="list-group">
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Captain Name</div>
            {log.captainName}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Title</div>
            {log.title}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Post</div>
            {log.post}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Were Mistakes Made Today?</div>
            {String(log.mistakesWereMadeToday)}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Days Since Last Crisis</div>
            {log.daysSinceLastCrisis}
          </div>
        </ListGroup.Item>
      </ListGroup>
      <ButtonGroup aria-label="Basic example">
        <Link to={`/logs`}>
          <Button variant="dark">Back</Button>
        </Link>
        <Link to={`/logs/${id}/edit`}>
          <Button variant="secondary">Edit</Button>
        </Link>
        <Button onClick={handleShow} variant="danger">
          Delete
        </Button>
      </ButtonGroup>

      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Log?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this log?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </article>
  );
}
