import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";

import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title as="h1">
          {log.title} - By {log.captainName}
        </Card.Title>
        <Card.Text as="h3">{log.post}</Card.Text>
        <Card.Text as="h5">
          Days since last crisis: {log.daysSinceLastCrisis}
        </Card.Text>
        <Link to={"/logs"}>
          <button type="button" className="btn btn-outline-secondary">
            Back
          </button>
        </Link>
        <br />
        <div>
          <Link to={`/logs/${index}/edit`}>
            <button type=" button" className="btn btn-outline-warning">
              Edit
            </button>
          </Link>
        </div>
        <br />
        <div>
          {" "}
          <ConfirmDelete
            index={index}
            navigate={navigate}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default LogDetails;
