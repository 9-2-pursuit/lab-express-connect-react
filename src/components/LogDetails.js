import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

const LogDetails = () => {
  const [log, setLog] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { captainName, title,
    post, 
    mistakesWereMadeToday, daysSinceLastCrisis } = log;
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${id}`)
      .then((res) => {
        console.log(res.data);
        setLog(res.data);
      })
      .catch((c) => {
        navigate("/404");
        console.error("catch", c);
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${id}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };



  return (
    <div classcaptainName="card-body text-center">
      <article>
        <br />
        <h3>
            <tr>
<td>
{captainName}{" "}
</td>
            </tr>
         
        </h3>
        <br />
        <container className="container">
          <h4>Title: {title} - By {captainName}</h4>
          <h4>Post: {post}</h4>
          <h4>Mistakes?: {mistakesWereMadeToday}</h4>
          <h4>Days Since Last Crisis: {daysSinceLastCrisis}</h4>
        </container>

        <div className="d-flex-show-buttons">
          <div className="back-btn">
          <Link to={`/logs`}>
            <button className="btn btn-dark">
              Back
            </button>
            </Link>
          </div>
          <div className="edit-btn">
            <Link to={`/logs/${id}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
          <div className="delete-btn">
        <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LogDetails;
