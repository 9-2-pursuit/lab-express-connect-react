import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const LogEditForm = () => {
  const API = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  let navigate = useNavigate();

  const [edit, setEdit] = useState({
   captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: "",
    daysSinceLastCrisis: "",
  });

  const updateLog = (updatedLog) => {
    axios
      .put(`${API}/logs/${id}`, updatedLog)
      .then(
        () => {
          navigate(`/logs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleText = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/logs/${id}`).then(
      (res) => setEdit(res.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate, API]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLog(edit, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="edit_labels">
          Captain's Name:
        </label>
        <input
          id="captainName"
          value={edit.captainName}
          type="text"
          onChange={handleText}
          placeholder="Name of Captain"
          required
        />

        <label htmlFor="title" className="edit_labels">
          Title:
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={edit.title}
          onChange={handleText}
        />

        <label htmlFor="post" className="edit_labels">
          Post:
        </label>
        <textarea
          onChange={handleText}
          id="post"
          title="post"
          type="text"
          value={edit.post}
        ></textarea>

<label htmlFor="mistakesWereMadeToday" className="edit_labels">
          Mistakes were made today:
        </label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          checked={edit.mistakesWereMadeToday}
          onChange={handleText}
        />
     
        <label htmlFor="crisis" className="edit_labels">
          Days Since Last Crisis:
        </label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          onChange={handleText}
          value={edit.daysSinceLastCrisis}
        />

        <br />

        <input
          classname="edit-submit"
          type="submit"
          style={{ }}
        />
      </form>
      <Link to={`/logs/`}>
        <button className="edit-button">Back!</button>
      </Link>
    </div>
  );
};

export default LogEditForm;
